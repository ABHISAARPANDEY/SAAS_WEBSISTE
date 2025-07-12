import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, 
  Pause, 
  Download, 
  Eye, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Zap,
  Clock,
  BarChart3,
  Settings,
  X
} from 'lucide-react';

const FileProcessor = ({ 
  files, 
  tool, 
  onProcessingComplete, 
  onError 
}) => {
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState(null);
  const [results, setResults] = useState([]);
  const [processingStage, setProcessingStage] = useState('');
  const [estimatedTime, setEstimatedTime] = useState(0);

  const getProcessingStages = (toolId) => {
    switch (toolId) {
      case 'pdf-converter':
        return ['Analyzing file format', 'Converting to PDF', 'Optimizing quality', 'Finalizing document'];
      case 'image-compressor':
        return ['Reading image data', 'Analyzing compression options', 'Applying compression', 'Saving optimized image'];
      case 'video-converter':
        return ['Loading video file', 'Analyzing video properties', 'Converting format', 'Encoding audio', 'Finalizing output'];
      case 'document-merger':
        return ['Reading documents', 'Analyzing structure', 'Merging content', 'Creating final document'];
      default:
        return ['Initializing', 'Processing', 'Optimizing', 'Finalizing'];
    }
  };

  const estimateProcessingTime = (files, toolId) => {
    const baseTime = 2; // 2 seconds base
    const fileMultiplier = files.length * 1.5;
    const toolMultiplier = {
      'pdf-converter': 1.2,
      'image-compressor': 0.8,
      'video-converter': 2.5,
      'audio-converter': 1.5,
      'document-merger': 1.8
    };
    
    return Math.round(baseTime + fileMultiplier * (toolMultiplier[toolId] || 1));
  };

  const simulateFileProcessing = async (file, toolId) => {
    const stages = getProcessingStages(toolId);
    const stageTime = estimatedTime / stages.length;
    
    for (let i = 0; i < stages.length; i++) {
      setProcessingStage(stages[i]);
      
      // Simulate stage processing
      const stageProgress = (i / stages.length) * 100;
      const nextStageProgress = ((i + 1) / stages.length) * 100;
      
      for (let p = stageProgress; p <= nextStageProgress; p += 2) {
        setProgress(p);
        await new Promise(resolve => setTimeout(resolve, (stageTime * 1000) / 50));
      }
    }
  };

  const generateProcessingResult = (file, toolId) => {
    const originalSize = file.size;
    let result = {
      id: Math.random().toString(36).substr(2, 9),
      originalFile: file,
      status: 'completed',
      processingTime: estimatedTime,
      timestamp: new Date().toISOString()
    };

    switch (toolId) {
      case 'pdf-converter':
        result = {
          ...result,
          outputFormat: 'PDF',
          outputSize: Math.round(originalSize * (0.7 + Math.random() * 0.4)),
          pages: Math.floor(Math.random() * 10) + 1,
          quality: 'High (300 DPI)',
          compression: 'Optimized'
        };
        break;

      case 'image-compressor':
        const compressionRatio = 0.3 + Math.random() * 0.4;
        result = {
          ...result,
          outputSize: Math.round(originalSize * compressionRatio),
          compressionRatio: Math.round((1 - compressionRatio) * 100),
          quality: '85%',
          format: file.type,
          dimensions: `${800 + Math.floor(Math.random() * 400)}x${600 + Math.floor(Math.random() * 300)}`
        };
        break;

      case 'video-converter':
        result = {
          ...result,
          outputFormat: 'MP4',
          outputSize: Math.round(originalSize * (0.6 + Math.random() * 0.5)),
          duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
          resolution: '1920x1080',
          bitrate: '5000 kbps',
          frameRate: '30 fps'
        };
        break;

      case 'audio-converter':
        result = {
          ...result,
          outputFormat: 'MP3',
          outputSize: Math.round(originalSize * (0.4 + Math.random() * 0.3)),
          duration: `${Math.floor(Math.random() * 5) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
          bitrate: '320 kbps',
          sampleRate: '44.1 kHz',
          channels: 'Stereo'
        };
        break;

      case 'document-merger':
        result = {
          ...result,
          outputFormat: 'PDF',
          outputSize: files.reduce((sum, f) => sum + f.size, 0),
          totalPages: files.length * (Math.floor(Math.random() * 5) + 2),
          documentsCount: files.length,
          tableOfContents: true
        };
        break;

      default:
        result = {
          ...result,
          outputSize: Math.round(originalSize * (0.8 + Math.random() * 0.4)),
          status: 'completed'
        };
    }

    return result;
  };

  const startProcessing = async () => {
    if (files.length === 0) {
      onError('No files to process');
      return;
    }

    setProcessing(true);
    setProgress(0);
    setResults([]);
    
    const totalTime = estimateProcessingTime(files, tool.id);
    setEstimatedTime(totalTime);

    try {
      const processedResults = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setCurrentFile(file);
        
        await simulateFileProcessing(file.file, tool.id);
        
        const result = generateProcessingResult(file.file, tool.id);
        processedResults.push(result);
      }

      setResults(processedResults);
      setProgress(100);
      setProcessingStage('Processing complete!');
      onProcessingComplete(processedResults);
      
    } catch (error) {
      onError('Processing failed: ' + error.message);
    } finally {
      setProcessing(false);
      setCurrentFile(null);
    }
  };

  const downloadResult = (result) => {
    // Simulate file download
    const blob = new Blob([`Processed file: ${result.originalFile.name}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `processed-${result.originalFile.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) return Image;
    if (fileType.startsWith('video/')) return Video;
    if (fileType.startsWith('audio/')) return Music;
    if (fileType.includes('pdf') || fileType.includes('document')) return FileText;
    return Archive;
  };

  return (
    <div className="space-y-6">
      {/* Processing Controls */}
      <div className="bg-dark-secondary border border-dark rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary font-orbitron">File Processing</h3>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Clock className="w-4 h-4 text-neon-cyan" />
            <span>Est. {estimatedTime}s</span>
          </div>
        </div>

        {!processing && results.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-dark-tertiary border border-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-neon-green" />
            </div>
            <h4 className="text-lg font-medium text-text-primary mb-2">Ready to Process</h4>
            <p className="text-text-secondary mb-6">
              {files.length} file{files.length !== 1 ? 's' : ''} ready for {tool.name.toLowerCase()}
            </p>
            <button
              onClick={startProcessing}
              className="btn-neon px-8 py-3 rounded-lg font-orbitron font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Play className="w-5 h-5 text-dark-primary" />
              Start Processing
            </button>
          </div>
        )}

        {processing && (
          <div className="space-y-4">
            {/* Current File */}
            {currentFile && (
              <div className="flex items-center gap-3 p-3 bg-dark-tertiary border border-neon-cyan/30 rounded-lg">
                <div className="w-8 h-8 bg-dark-tertiary border border-neon-cyan rounded-lg flex items-center justify-center">
                  {(() => {
                    const FileIcon = getFileIcon(currentFile.type);
                    return <FileIcon className="w-4 h-4 text-neon-cyan" />;
                  })()}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-text-primary">{currentFile.name}</div>
                  <div className="text-sm text-neon-cyan">{processingStage}</div>
                </div>
                <RefreshCw className="w-5 h-5 text-neon-cyan animate-spin" />
              </div>
            )}

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-text-secondary">
                <span>Processing Progress</span>
                <span className="font-medium text-text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-dark-tertiary rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full gradient-neon"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Processing Stats */}
            <div className="grid grid-cols-3 gap-4 text-center bg-dark-tertiary p-3 rounded-lg border border-dark">
              <div>
                <div className="text-lg font-bold text-neon-green">{files.length}</div>
                <div className="text-xs text-text-secondary">Files</div>
              </div>
              <div>
                <div className="text-lg font-bold text-neon-cyan">{Math.round(progress)}%</div>
                <div className="text-xs text-text-secondary">Complete</div>
              </div>
              <div>
                <div className="text-lg font-bold text-neon-pink">{estimatedTime}s</div>
                <div className="text-xs text-text-secondary">Est. Time</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 mt-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary font-orbitron">Processing Results</h3>
              <div className="flex items-center gap-2 text-neon-green">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span className="font-medium text-neon-green">Complete</span>
              </div>
            </div>

            <div className="space-y-3">
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-secondary border border-dark hover:border-neon-green/30 rounded-xl p-6 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-dark-tertiary border border-neon-green rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-neon-green" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">{result.originalFile.name}</h4>
                        <p className="text-sm text-text-secondary">
                          Processed in {result.processingTime}s
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadResult(result)}
                        className="bg-dark-tertiary text-neon-cyan border border-neon-cyan hover:neon-glow-cyan px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4 text-neon-cyan" />
                        Download
                      </button>
                    </div>
                  </div>

                  {/* Processing Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-dark-tertiary p-4 rounded-lg border border-dark">
                    <div>
                      <div className="text-text-secondary">Original Size</div>
                      <div className="font-medium text-text-primary">{formatFileSize(result.originalFile.size)}</div>
                    </div>
                    <div>
                      <div className="text-text-secondary">Output Size</div>
                      <div className="font-medium text-text-primary">{formatFileSize(result.outputSize)}</div>
                    </div>
                    {result.compressionRatio && (
                      <div>
                        <div className="text-text-secondary">Compression</div>
                        <div className="font-medium text-neon-green">{result.compressionRatio}% saved</div>
                      </div>
                    )}
                    {result.outputFormat && (
                      <div>
                        <div className="text-text-secondary">Format</div>
                        <div className="font-medium text-text-primary">{result.outputFormat}</div>
                      </div>
                    )}
                  </div>

                  {/* Additional Details */}
                  {(result.pages || result.duration || result.resolution) && (
                    <div className="mt-4 pt-4 border-t border-dark">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm bg-dark-tertiary p-4 rounded-lg border border-dark mt-4">
                        {result.pages && (
                          <div>
                            <div className="text-text-secondary">Pages</div>
                            <div className="font-medium text-text-primary">{result.pages}</div>
                          </div>
                        )}
                        {result.duration && (
                          <div>
                            <div className="text-text-secondary">Duration</div>
                            <div className="font-medium text-text-primary">{result.duration}</div>
                          </div>
                        )}
                        {result.resolution && (
                          <div>
                            <div className="text-text-secondary">Resolution</div>
                            <div className="font-medium text-text-primary">{result.resolution}</div>
                          </div>
                        )}
                        {result.quality && (
                          <div>
                            <div className="text-text-secondary">Quality</div>
                            <div className="font-medium text-text-primary">{result.quality}</div>
                          </div>
                        )}
                        {result.bitrate && (
                          <div>
                            <div className="text-text-secondary">Bitrate</div>
                            <div className="font-medium text-text-primary">{result.bitrate}</div>
                          </div>
                        )}
                        {result.sampleRate && (
                          <div>
                            <div className="text-text-secondary">Sample Rate</div>
                            <div className="font-medium text-text-primary">{result.sampleRate}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Batch Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-dark mt-4">
              <div className="text-sm text-text-secondary">
                {results.length} file{results.length !== 1 ? 's' : ''} processed successfully
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    results.forEach(downloadResult);
                  }}
                  className="bg-dark-tertiary text-neon-green border border-neon-green hover:neon-glow px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-neon-green" />
                  Download All
                </button>
                <button
                  onClick={() => {
                    setResults([]);
                    setProgress(0);
                  }}
                  className="text-text-secondary hover:text-text-primary flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4 text-neon-cyan" />
                  Process More
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FileProcessor;