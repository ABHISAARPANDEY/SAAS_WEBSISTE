import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FileUploadSystem from './FileUploadSystem';
import { 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Info,
  Shield,
  Zap,
  Lock
} from 'lucide-react';

const FileUploadDemo = () => {
  const [uploadResults, setUploadResults] = useState([]);
  const [uploadErrors, setUploadErrors] = useState([]);

  const handleUploadComplete = (files) => {
    console.log('Upload completed:', files);
    setUploadResults(files);
  };

  const handleUploadError = (error) => {
    console.error('Upload error:', error);
    setUploadErrors(prev => [...prev, error]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Production-Grade <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">File Upload</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Secure, scalable file upload system with virus scanning, rate limiting, 
            and comprehensive error handling for production applications.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
            <p className="text-gray-600 text-sm">
              Virus scanning, file type validation, and malware detection protect your system from threats.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">High Performance</h3>
            <p className="text-gray-600 text-sm">
              Optimized upload processing with progress tracking and concurrent file handling.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Ready</h3>
            <p className="text-gray-600 text-sm">
              Rate limiting, authentication, and comprehensive logging for production environments.
            </p>
          </div>
        </motion.div>

        {/* Upload Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8"
        >
          <FileUploadSystem
            endpoint="/api/upload"
            acceptedTypes={['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mp3']}
            maxFileSize={50 * 1024 * 1024} // 50MB
            maxFiles={10}
            requireAuth={true}
            enableVirusScanning={true}
            onUploadComplete={handleUploadComplete}
            onUploadError={handleUploadError}
          />
        </motion.div>

        {/* Results Section */}
        {(uploadResults.length > 0 || uploadErrors.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Success Results */}
            {uploadResults.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Upload Successful</h3>
                </div>
                <div className="space-y-3">
                  {uploadResults.map((file, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{file.name}</h4>
                          <p className="text-sm text-gray-600">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB • {file.type}
                          </p>
                        </div>
                        <div className="text-sm text-green-600">
                          Uploaded at {new Date(file.uploadedAt).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Error Results */}
            {uploadErrors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-900">Upload Errors</h3>
                </div>
                <div className="space-y-2">
                  {uploadErrors.map((error, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                      <p className="text-red-700">{error.message || error.toString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Technical Specifications</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Security Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Virus scanning with ClamAV integration</li>
                  <li>• File type validation (MIME + extension)</li>
                  <li>• Malware signature detection</li>
                  <li>• File name sanitization</li>
                  <li>• Checksum verification</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Performance</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rate limiting (100-500 req/15min)</li>
                  <li>• Concurrent upload processing</li>
                  <li>• Progress tracking</li>
                  <li>• Automatic retry mechanisms</li>
                  <li>• Memory-efficient streaming</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">File Support</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Images: JPG, PNG, GIF, WebP</li>
                  <li>• Documents: PDF, DOC, DOCX, TXT</li>
                  <li>• Media: MP4, MP3, WAV</li>
                  <li>• Archives: ZIP, RAR, 7Z</li>
                  <li>• Max size: 50MB per file</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FileUploadDemo;