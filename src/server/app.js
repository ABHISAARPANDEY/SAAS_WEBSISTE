const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

// Import security configurations
const {
  corsOptions,
  helmetOptions,
  generalLimiter,
  securityHeaders,
  sanitizeRequest,
  requestLogger,
  errorHandler
} = require('./config/security');

// Import routes
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Trust proxy (important for rate limiting and IP detection)
app.set('trust proxy', 1);

// Security middleware
app.use(helmet(helmetOptions));
app.use(cors(corsOptions));
app.use(securityHeaders);
app.use(requestLogger);

// Rate limiting
app.use(generalLimiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request sanitization
app.use(sanitizeRequest);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version || '1.0.0'
  });
});

// API routes
app.use('/api/upload', uploadRoutes);

// File serving with security checks
app.get('/api/files/:fileId', async (req, res) => {
  try {
    const { fileId } = req.params;
    const { token } = req.query;
    
    // Validate file ID format
    if (!/^[a-zA-Z0-9-_]+$/.test(fileId)) {
      return res.status(400).json({
        error: 'Invalid file ID',
        message: 'File ID contains invalid characters'
      });
    }
    
    // Implement your file serving logic here
    // This should include:
    // 1. Token validation
    // 2. File existence check
    // 3. Access permission verification
    // 4. Secure file serving
    
    res.status(501).json({
      error: 'Not implemented',
      message: 'File serving endpoint not yet implemented'
    });
    
  } catch (error) {
    console.error('File serving error:', error);
    res.status(500).json({
      error: 'File serving failed',
      message: 'An error occurred while serving the file'
    });
  }
});

// Static file serving (for uploaded files) - with security
app.use('/uploads', express.static(path.join(__dirname, '../uploads'), {
  dotfiles: 'deny',
  index: false,
  setHeaders: (res, path) => {
    // Set security headers for static files
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    
    // Prevent execution of uploaded files
    res.setHeader('Content-Disposition', 'attachment');
  }
}));

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested resource was not found',
    path: req.originalUrl
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Upload server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Upload directory: ${process.env.UPLOAD_DIR || './uploads'}`);
});

module.exports = app;