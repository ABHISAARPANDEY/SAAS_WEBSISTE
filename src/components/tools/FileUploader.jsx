import React, { useState, useRef, useCallback } from 'react';
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
  RefreshCw
} from 'lucide-react';

const FileUploader = ({ 
  tool, 
  onFilesSelected, 
  acceptedTypes = [], 
  maxFileSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 1,
  showPreview = true 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [errors, setErrors] = useState([]);
  const fileInputRef = useRef(null);

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) return Image;
    if (fileType.startsWith('video/')) return Video;
    if (fileType.startsWith('audio/')) return Music;
    if (fileType.includes('pdf') || fileType.includes('document')) return FileText;
    if (fileType.includes('zip') || fileType.includes('rar')) return Archive;
    return File;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file) => {
    const errors = [];
    
    // Check file size
    if (file.size > maxFileSize) {
      errors.push(`File size exceeds ${formatFileSize(maxFileSize)} limit`);
    }
    
    // Check file type
    if (acceptedTypes.length > 0 && !acceptedTypes.some(type => file.type.includes(type))) {
      errors.push(`File type ${file.type} is not supported`);
    }
    
    return errors;
  };

  const simulateUpload = (file) => {
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          resolve();
        }
        setUploadProgress(prev => ({
          ...prev,
          [file.name]: Math.min(progress, 100)
        }));
      }, 200);
    });
  };

  const handleFiles = useCallback(async (fileList) => {
    const newFiles = Array.from(fileList);
    const validFiles = [];
    const newErrors = [];

    // Check total file count
    if (files.length + newFiles.length > maxFiles) {
      newErrors.push(`Maximum ${maxFiles} file${maxFiles > 1 ? 's' : ''} allowed`);
      setErrors(newErrors);
      return;
    }

    // Validate each file
    for (const file of newFiles) {
      const fileErrors = validateFile(file);
      if (fileErrors.length > 0) {
        newErrors.push(`${file.name}: ${fileErrors.join(', ')}`);
      } else {
        validFiles.push({
          file,
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'uploading'
        });
      }
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors([]), 5000);
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      
      // Simulate upload for each file
      for (const fileObj of validFiles) {
        await simulateUpload(fileObj.file);
        setFiles(prev => prev.map(f => 
          f.id === fileObj.id ? { ...f, status: 'completed' } : f
        ));
      }

      // Notify parent component
      onFilesSelected([...files, ...validFiles]);
    }
  }, [files, maxFiles, maxFileSize, acceptedTypes, onFilesSelected]);

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

  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      const file = files.find(f => f.id === fileId);
      if (file) {
        delete newProgress[file.name];
      }
      return newProgress;
    });
  };

  const clearAllFiles = () => {
    setFiles([]);
    setUploadProgress({});
    setErrors([]);
  };

  const getAcceptedTypesDisplay = () => {
    if (acceptedTypes.length === 0) return 'All file types';
    return acceptedTypes.map(type => type.toUpperCase()).join(', ');
  };

  return (
    <div className="space-y-4">
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
              {dragActive ? 'Drop files here' : 'Upload Files'}
            </h3>
            <p className="text-text-secondary mb-4">
              Drag and drop files here, or click to browse
            </p>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn-neon px-6 py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300"
            >
              Choose Files
            </button>
          </div>

          {/* File Requirements */}
          <div className="text-sm text-text-secondary space-y-1">
            <div>Accepted formats: {getAcceptedTypesDisplay()}</div>
            <div>Maximum file size: {formatFileSize(maxFileSize)}</div>
            <div>Maximum files: {maxFiles}</div>
          </div>
        </div>
      </div>

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

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between mt-6">
            <h4 className="font-medium text-text-primary">
              Uploaded Files ({files.length}/{maxFiles})
            </h4>
            <button
              onClick={clearAllFiles}
              className="text-neon-pink hover:text-neon-pink/80 text-sm flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4 text-neon-pink" />
              Clear All
            </button>
          </div>

          <div className="space-y-2">
            {files.map((fileObj) => {
              const FileIcon = getFileIcon(fileObj.type);
              const progress = uploadProgress[fileObj.name] || 0;
              
              return (
                <motion.div
                  key={fileObj.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-dark-secondary border border-dark rounded-lg p-4 hover:border-neon-green/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dark-tertiary rounded-lg flex items-center justify-center">
                      <FileIcon className="w-5 h-5 text-neon-green" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-medium text-text-primary truncate">
                          {fileObj.name}
                        </h5>
                        <div className="flex items-center gap-2">
                          {fileObj.status === 'completed' && (
                            <Check className="w-4 h-4 text-neon-green" />
                          )}
                          {fileObj.status === 'uploading' && (
                            <Loader className="w-4 h-4 text-neon-cyan animate-spin" />
                          )}
                          <button
                            onClick={() => removeFile(fileObj.id)}
                            className="text-text-secondary hover:text-neon-pink"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <span>{formatFileSize(fileObj.size)}</span>
                        <span>{fileObj.type}</span>
                      </div>
                      
                      {fileObj.status === 'uploading' && (
                        <div className="mt-2">
                          <div className="w-full bg-dark-tertiary rounded-full h-2">
                            <div
                              className="bg-neon-green h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <div className="text-xs text-text-secondary mt-1">
                            {Math.round(progress)}% uploaded
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* File Preview for Images */}
                  {showPreview && fileObj.type.startsWith('image/') && fileObj.status === 'completed' && (
                    <div className="mt-3 pt-3 border-t border-dark">
                      <img
                        src={URL.createObjectURL(fileObj.file)}
                        alt={fileObj.name}
                        className="w-full h-32 object-cover rounded-lg border border-dark"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;