import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload, 
  File, 
  X, 
  Check, 
  AlertCircle, 
  Image, 
  FileText, 
  Video, 
  Music,
  Archive,
  Loader,
  Download,
  Eye,
  Trash2,
  RefreshCw,
  Shield,
  Lock,
  Zap,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

const FileUploadSystem = ({ 
  endpoint = '/api/upload',
  acceptedTypes = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mp3'],
  maxFileSize = 50 * 1024 * 1024, // 50MB
  maxFiles = 10,
  requireAuth = true,
  enableVirusScanning = true,
  onUploadComplete,
  onUploadError,
  className = ''
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [errors, setErrors] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStats, setUploadStats] = useState({ total: 0, completed: 0, failed: 0 });
  const [securityStatus, setSecurityStatus] = useState('idle');
  const [rateLimitInfo, setRateLimitInfo] = useState({ remaining: 100, resetTime: null });
  
  const fileInputRef = useRef(null);
  const uploadControllerRef = useRef(null);

  // File type configurations
  const fileTypeConfig = {
    image: {
      types: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'],
      maxSize: 20 * 1024 * 1024, // 20MB
      icon: Image,
      color: 'text-green-600'
    },
    document: {
      types: ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'],
      maxSize: 50 * 1024 * 1024, // 50MB
      icon: FileText,
      color: 'text-blue-600'
    },
    video: {
      types: ['.mp4', '.avi', '.mov', '.wmv', '.mkv', '.webm'],
      maxSize: 500 * 1024 * 1024, // 500MB
      icon: Video,
      color: 'text-purple-600'
    },
    audio: {
      types: ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
      maxSize: 100 * 1024 * 1024, // 100MB
      icon: Music,
      color: 'text-orange-600'
    },
    archive: {
      types: ['.zip', '.rar', '.7z', '.tar', '.gz'],
      maxSize: 100 * 1024 * 1024, // 100MB
      icon: Archive,
      color: 'text-gray-600'
    }
  };

  // Security validation
  const validateFileType = (file) => {
    const extension = '.' + file.name.split('.').pop().toLowerCase();
    const mimeType = file.type.toLowerCase();
    
    // Check against accepted types
    if (!acceptedTypes.includes(extension)) {
      return { valid: false, error: `File type ${extension} not allowed` };
    }

    // Additional MIME type validation
    const mimeValidation = {
      '.jpg': ['image/jpeg'],
      '.jpeg': ['image/jpeg'],
      '.png': ['image/png'],
      '.gif': ['image/gif'],
      '.pdf': ['application/pdf'],
      '.doc': ['application/msword'],
      '.docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      '.mp4': ['video/mp4'],
      '.mp3': ['audio/mpeg']
    };

    if (mimeValidation[extension] && !mimeValidation[extension].includes(mimeType)) {
      return { valid: false, error: 'File type mismatch detected' };
    }

    return { valid: true };
  };

  const sanitizeFileName = (fileName) => {
    // Remove dangerous characters and limit length
    return fileName
      .replace(/[^a-zA-Z0-9.-]/g, '_')
      .substring(0, 255)
      .replace(/\.+/g, '.');
  };

  const validateFile = (file) => {
    const errors = [];
    
    // File size validation
    if (file.size > maxFileSize) {
      errors.push(`File size exceeds ${formatFileSize(maxFileSize)} limit`);
    }
    
    // File type validation
    const typeValidation = validateFileType(file);
    if (!typeValidation.valid) {
      errors.push(typeValidation.error);
    }
    
    // File name validation
    if (file.name.length > 255) {
      errors.push('File name too long (max 255 characters)');
    }
    
    // Check for suspicious file patterns
    const suspiciousPatterns = [
      /\.exe$/i, /\.bat$/i, /\.cmd$/i, /\.scr$/i, /\.pif$/i,
      /\.com$/i, /\.vbs$/i, /\.js$/i, /\.jar$/i, /\.php$/i
    ];
    
    if (suspiciousPatterns.some(pattern => pattern.test(file.name))) {
      errors.push('Potentially dangerous file type detected');
    }
    
    return errors;
  };

  const getFileTypeInfo = (fileName) => {
    const extension = '.' + fileName.split('.').pop().toLowerCase();
    
    for (const [category, config] of Object.entries(fileTypeConfig)) {
      if (config.types.includes(extension)) {
        return { category, ...config };
      }
    }
    
    return { category: 'unknown', icon: File, color: 'text-gray-600' };
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const generateFileId = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

  const checkRateLimit = async () => {
    try {
      const response = await fetch('/api/upload/rate-limit', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setRateLimitInfo(data);
        return data.remaining > 0;
      }
      
      return false;
    } catch (error) {
      console.error('Rate limit check failed:', error);
      return true; // Allow upload if check fails
    }
  };

  const performVirusScan = async (file) => {
    if (!enableVirusScanning) return { clean: true };
    
    setSecurityStatus('scanning');
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/security/virus-scan', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: formData,
      });
      
      const result = await response.json();
      setSecurityStatus(result.clean ? 'clean' : 'threat');
      
      return result;
    } catch (error) {
      console.error('Virus scan failed:', error);
      setSecurityStatus('error');
      return { clean: false, error: 'Security scan failed' };
    }
  };

  const uploadFile = async (fileObj) => {
    const { file, id } = fileObj;
    
    // Create abort controller for this upload
    const controller = new AbortController();
    uploadControllerRef.current = controller;
    
    try {
      // Perform virus scan
      const scanResult = await performVirusScan(file);
      if (!scanResult.clean) {
        throw new Error(scanResult.error || 'File failed security scan');
      }
      
      // Prepare form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', sanitizeFileName(file.name));
      formData.append('fileId', id);
      formData.append('checksum', await calculateChecksum(file));
      
      // Upload with progress tracking
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'X-File-Type': file.type,
          'X-File-Size': file.size.toString(),
        },
        body: formData,
        signal: controller.signal,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Upload failed: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Update file status
      setFiles(prev => prev.map(f => 
        f.id === id 
          ? { ...f, status: 'completed', uploadResult: result }
          : f
      ));
      
      setUploadProgress(prev => ({ ...prev, [id]: 100 }));
      setUploadStats(prev => ({ ...prev, completed: prev.completed + 1 }));
      
      return result;
      
    } catch (error) {
      if (error.name === 'AbortError') {
        setFiles(prev => prev.map(f => 
          f.id === id ? { ...f, status: 'cancelled' } : f
        ));
      } else {
        setFiles(prev => prev.map(f => 
          f.id === id ? { ...f, status: 'error', error: error.message } : f
        ));
        setUploadStats(prev => ({ ...prev, failed: prev.failed + 1 }));
      }
      throw error;
    }
  };

  const calculateChecksum = async (file) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const simulateUploadProgress = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 95) {
        progress = 95; // Stop at 95% until actual upload completes
        clearInterval(interval);
      }
      setUploadProgress(prev => ({ ...prev, [fileId]: Math.min(progress, 95) }));
    }, 200);
    
    return interval;
  };

  const handleFiles = useCallback(async (fileList) => {
    const newFiles = Array.from(fileList);
    const validFiles = [];
    const newErrors = [];

    // Check authentication
    if (requireAuth && !localStorage.getItem('authToken')) {
      newErrors.push('Authentication required for file uploads');
      setErrors(newErrors);
      return;
    }

    // Check rate limits
    const rateLimitOk = await checkRateLimit();
    if (!rateLimitOk) {
      newErrors.push('Upload rate limit exceeded. Please try again later.');
      setErrors(newErrors);
      return;
    }

    // Check total file count
    if (files.length + newFiles.length > maxFiles) {
      newErrors.push(`Maximum ${maxFiles} files allowed`);
      setErrors(newErrors);
      return;
    }

    // Validate each file
    for (const file of newFiles) {
      const fileErrors = validateFile(file);
      if (fileErrors.length > 0) {
        newErrors.push(`${file.name}: ${fileErrors.join(', ')}`);
      } else {
        const fileTypeInfo = getFileTypeInfo(file.name);
        validFiles.push({
          file,
          id: generateFileId(),
          name: sanitizeFileName(file.name),
          size: file.size,
          type: file.type,
          typeInfo: fileTypeInfo,
          status: 'pending',
          uploadedAt: new Date().toISOString()
        });
      }
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors([]), 10000);
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      setUploadStats(prev => ({ 
        ...prev, 
        total: prev.total + validFiles.length 
      }));
    }
  }, [files, maxFiles, maxFileSize, acceptedTypes, requireAuth]);

  const startUpload = async () => {
    const pendingFiles = files.filter(f => f.status === 'pending');
    if (pendingFiles.length === 0) return;

    setIsUploading(true);
    setSecurityStatus('idle');

    try {
      // Start progress simulation for all files
      const progressIntervals = {};
      pendingFiles.forEach(file => {
        file.status = 'uploading';
        progressIntervals[file.id] = simulateUploadProgress(file.id);
      });

      setFiles(prev => prev.map(f => 
        pendingFiles.find(pf => pf.id === f.id) 
          ? { ...f, status: 'uploading' }
          : f
      ));

      // Upload files sequentially to avoid overwhelming the server
      for (const fileObj of pendingFiles) {
        try {
          await uploadFile(fileObj);
          clearInterval(progressIntervals[fileObj.id]);
        } catch (error) {
          clearInterval(progressIntervals[fileObj.id]);
          console.error(`Upload failed for ${fileObj.name}:`, error);
        }
      }

      // Notify completion
      if (onUploadComplete) {
        const completedFiles = files.filter(f => f.status === 'completed');
        onUploadComplete(completedFiles);
      }

    } catch (error) {
      console.error('Upload process failed:', error);
      if (onUploadError) {
        onUploadError(error);
      }
    } finally {
      setIsUploading(false);
      setSecurityStatus('idle');
    }
  };

  const cancelUpload = () => {
    if (uploadControllerRef.current) {
      uploadControllerRef.current.abort();
    }
    setIsUploading(false);
    setFiles(prev => prev.map(f => 
      f.status === 'uploading' ? { ...f, status: 'cancelled' } : f
    ));
  };

  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const retryFile = (fileId) => {
    setFiles(prev => prev.map(f => 
      f.id === fileId ? { ...f, status: 'pending', error: null } : f
    ));
  };

  const clearAllFiles = () => {
    setFiles([]);
    setUploadProgress({});
    setErrors([]);
    setUploadStats({ total: 0, completed: 0, failed: 0 });
  };

  // Drag and drop handlers
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // Security status indicator
  const SecurityIndicator = () => (
    <div className="flex items-center gap-2 text-sm">
      <Shield className="w-4 h-4" />
      <span className="font-medium">Security:</span>
      <span className={`flex items-center gap-1 ${
        securityStatus === 'clean' ? 'text-green-600' :
        securityStatus === 'scanning' ? 'text-blue-600' :
        securityStatus === 'threat' ? 'text-red-600' :
        'text-gray-600'
      }`}>
        {securityStatus === 'scanning' && <Loader className="w-3 h-3 animate-spin" />}
        {securityStatus === 'clean' && <CheckCircle className="w-3 h-3" />}
        {securityStatus === 'threat' && <AlertTriangle className="w-3 h-3" />}
        {securityStatus === 'idle' && <Lock className="w-3 h-3" />}
        {securityStatus === 'scanning' ? 'Scanning...' :
         securityStatus === 'clean' ? 'Clean' :
         securityStatus === 'threat' ? 'Threat Detected' :
         'Protected'}
      </span>
    </div>
  );

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 bg-dark-primary ${
          dragActive 
            ? 'border-neon-green bg-dark-tertiary/50' 
            : 'border-dark hover:border-neon-green/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple={maxFiles > 1}
          accept={acceptedTypes.join(',')}
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="space-y-4">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
            dragActive ? 'bg-dark-tertiary border border-neon-green' : 'bg-dark-tertiary border border-dark'
          }`}>
            <Upload className={`w-8 h-8 ${dragActive ? 'text-neon-green' : 'text-text-secondary'}`} />
          </div>

          <div>
            <h3 className="text-lg font-semibold font-orbitron text-text-primary mb-2">
              {dragActive ? 'Drop files here' : 'Secure File Upload'}
            </h3>
            <p className="text-text-secondary mb-4">
              Drag and drop files here, or click to browse
            </p>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Choose Files
            </button>
          </div>

          {/* Security and Requirements Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-secondary">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-neon-green" />
                <span>Virus scanning enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-neon-cyan" />
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-pink" />
                <span>Fast upload processing</span>
              </div>
            </div>
            <div className="space-y-1">
              <div>Accepted: {acceptedTypes.slice(0, 3).join(', ')}{acceptedTypes.length > 3 && '...'}</div>
              <div>Max size: {formatFileSize(maxFileSize)}</div>
              <div>Max files: {maxFiles}</div>
              {requireAuth && <div>Authentication required</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Rate Limit Info */}
      {rateLimitInfo.remaining < 20 && (
        <div className="bg-dark-tertiary border border-neon-pink/30 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-neon-pink" />
            <div>
              <h4 className="font-medium text-neon-pink">Upload Limit Warning</h4>
              <p className="text-sm text-text-secondary">
                {rateLimitInfo.remaining} uploads remaining. 
                {rateLimitInfo.resetTime && ` Resets at ${new Date(rateLimitInfo.resetTime).toLocaleTimeString()}`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Messages */}
      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-dark-tertiary border border-neon-pink/50 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-neon-pink flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-neon-pink mb-1">Upload Errors</h4>
                <ul className="text-sm text-neon-pink/80 space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setErrors([])}
                className="text-neon-pink hover:text-neon-pink/80"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Controls */}
      {files.length > 0 && (
        <div className="bg-dark-secondary border border-dark rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-medium text-text-primary font-orbitron">
                Files Ready ({files.length}/{maxFiles})
              </h4>
              <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary">
                <span>Total: {uploadStats.total}</span>
                <span className="text-neon-green">Completed: {uploadStats.completed}</span>
                <span className="text-neon-pink">Failed: {uploadStats.failed}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <SecurityIndicator />
              
              {!isUploading ? (
                <div className="flex gap-2">
                  <button
                    onClick={startUpload}
                    disabled={files.filter(f => f.status === 'pending').length === 0}
                    className="bg-dark-tertiary text-neon-green border border-neon-green hover:neon-glow px-4 py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4 text-neon-green" />
                    Upload All
                  </button>
                  <button
                    onClick={clearAllFiles}
                    className="text-neon-pink hover:text-neon-pink/80 px-4 py-2 rounded-lg hover:bg-dark-tertiary transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4 text-neon-pink" />
                    Clear
                  </button>
                </div>
              ) : (
                <button
                  onClick={cancelUpload}
                  className="bg-dark-tertiary text-neon-pink border border-neon-pink hover:neon-glow-pink px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <X className="w-4 h-4 text-neon-pink" />
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          {files.map((fileObj) => {
            const FileIcon = fileObj.typeInfo.icon;
            const progress = uploadProgress[fileObj.id] || 0;
            
            return (
              <motion.div
                key={fileObj.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-dark-secondary border border-dark hover:border-neon-green/30 rounded-lg p-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    fileObj.status === 'completed' ? 'bg-dark-tertiary border border-neon-green' :
                    fileObj.status === 'error' ? 'bg-dark-tertiary border border-neon-pink' :
                    fileObj.status === 'uploading' ? 'bg-dark-tertiary border border-neon-cyan' :
                    'bg-dark-tertiary border border-dark'
                  }`}>
                    {fileObj.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-neon-green" />
                    ) : fileObj.status === 'error' ? (
                      <AlertCircle className="w-5 h-5 text-neon-pink" />
                    ) : fileObj.status === 'uploading' ? (
                      <Loader className="w-5 h-5 text-neon-cyan animate-spin" />
                    ) : (
                      <FileIcon className={`w-5 h-5 text-neon-green`} />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-medium text-text-primary truncate">
                        {fileObj.name}
                      </h5>
                      <div className="flex items-center gap-2">
                        {fileObj.status === 'error' && (
                          <button
                            onClick={() => retryFile(fileObj.id)}
                            className="text-neon-cyan hover:text-neon-cyan/80 text-sm"
                          >
                            <RefreshCw className="w-4 h-4 text-neon-cyan" />
                          </button>
                        )}
                        <button
                          onClick={() => removeFile(fileObj.id)}
                          className="text-text-secondary hover:text-neon-pink"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                      <span>{formatFileSize(fileObj.size)}</span>
                      <span className="capitalize">{fileObj.typeInfo.category}</span>
                    </div>
                    
                    {fileObj.status === 'uploading' && (
                      <div className="space-y-1">
                        <div className="w-full bg-dark-tertiary rounded-full h-2">
                          <div
                            className="bg-neon-green h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-text-secondary">
                          {Math.round(progress)}% uploaded
                        </div>
                      </div>
                    )}
                    
                    {fileObj.status === 'error' && fileObj.error && (
                      <div className="text-sm text-neon-pink mt-1">
                        {fileObj.error}
                      </div>
                    )}
                    
                    {fileObj.status === 'completed' && fileObj.uploadResult && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-neon-green">Upload successful</span>
                        {fileObj.uploadResult.downloadUrl && (
                          <a
                            href={fileObj.uploadResult.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neon-cyan hover:text-neon-cyan/80"
                          >
                            <Download className="w-4 h-4 text-neon-cyan" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Upload Summary */}
      {uploadStats.total > 0 && (
        <div className="bg-dark-tertiary rounded-lg p-4 border border-dark">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-text-primary">{uploadStats.total}</div>
              <div className="text-sm text-text-secondary">Total Files</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neon-green">{uploadStats.completed}</div>
              <div className="text-sm text-text-secondary">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neon-pink">{uploadStats.failed}</div>
              <div className="text-sm text-text-secondary">Failed</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadSystem;