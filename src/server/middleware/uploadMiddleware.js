const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs').promises;
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { body, validationResult } = require('express-validator');

// Security configurations
const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads';
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE) || 50 * 1024 * 1024; // 50MB
const MAX_FILES = parseInt(process.env.MAX_FILES) || 10;

// Allowed file types with MIME validation
const ALLOWED_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
  'image/webp': ['.webp'],
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'text/plain': ['.txt'],
  'video/mp4': ['.mp4'],
  'audio/mpeg': ['.mp3'],
  'audio/wav': ['.wav'],
  'application/zip': ['.zip']
};

// Rate limiting configuration
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many upload attempts, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Rate limit exceeded',
      message: 'Too many upload attempts, please try again later.',
      retryAfter: Math.ceil(req.rateLimit.resetTime / 1000)
    });
  }
});

// Authenticated user rate limiting (higher limits)
const authenticatedUploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // higher limit for authenticated users
  keyGenerator: (req) => req.user?.id || req.ip,
  skip: (req) => !req.user, // skip if not authenticated
});

// File name sanitization
const sanitizeFileName = (fileName) => {
  // Remove path traversal attempts and dangerous characters
  const sanitized = fileName
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, '_')
    .replace(/^\.+/, '')
    .replace(/\.+$/, '')
    .substring(0, 255);
  
  // Ensure file has an extension
  if (!path.extname(sanitized)) {
    return sanitized + '.txt';
  }
  
  return sanitized;
};

// Generate secure file name
const generateSecureFileName = (originalName) => {
  const ext = path.extname(originalName);
  const timestamp = Date.now();
  const randomBytes = crypto.randomBytes(16).toString('hex');
  return `${timestamp}_${randomBytes}${ext}`;
};

// File type validation
const validateFileType = (file) => {
  const mimeType = file.mimetype.toLowerCase();
  const extension = path.extname(file.originalname).toLowerCase();
  
  // Check if MIME type is allowed
  if (!ALLOWED_TYPES[mimeType]) {
    return {
      valid: false,
      error: `File type ${mimeType} is not allowed`
    };
  }
  
  // Check if extension matches MIME type
  if (!ALLOWED_TYPES[mimeType].includes(extension)) {
    return {
      valid: false,
      error: `File extension ${extension} does not match MIME type ${mimeType}`
    };
  }
  
  return { valid: true };
};

// Virus scanning simulation (replace with actual antivirus integration)
const performVirusScan = async (filePath) => {
  try {
    // Simulate virus scanning delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, integrate with actual antivirus service
    // Example: ClamAV, VirusTotal API, etc.
    
    // Check file size for suspicious patterns
    const stats = await fs.stat(filePath);
    if (stats.size === 0) {
      return { clean: false, threat: 'Empty file detected' };
    }
    
    // Read first few bytes to check for executable signatures
    const buffer = Buffer.alloc(4);
    const fileHandle = await fs.open(filePath, 'r');
    await fileHandle.read(buffer, 0, 4, 0);
    await fileHandle.close();
    
    // Check for common executable signatures
    const executableSignatures = [
      Buffer.from([0x4D, 0x5A]), // PE executable
      Buffer.from([0x7F, 0x45, 0x4C, 0x46]), // ELF executable
      Buffer.from([0xCA, 0xFE, 0xBA, 0xBE]), // Mach-O executable
    ];
    
    for (const signature of executableSignatures) {
      if (buffer.subarray(0, signature.length).equals(signature)) {
        return { clean: false, threat: 'Executable file detected' };
      }
    }
    
    return { clean: true };
  } catch (error) {
    console.error('Virus scan error:', error);
    return { clean: false, error: 'Scan failed' };
  }
};

// Storage configuration
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      // Create upload directory if it doesn't exist
      await fs.mkdir(UPLOAD_DIR, { recursive: true });
      
      // Create user-specific subdirectory
      const userDir = path.join(UPLOAD_DIR, req.user?.id || 'anonymous');
      await fs.mkdir(userDir, { recursive: true });
      
      cb(null, userDir);
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    // Generate secure filename
    const secureFileName = generateSecureFileName(file.originalname);
    cb(null, secureFileName);
  }
});

// File filter for additional validation
const fileFilter = (req, file, cb) => {
  // Validate file type
  const typeValidation = validateFileType(file);
  if (!typeValidation.valid) {
    return cb(new Error(typeValidation.error), false);
  }
  
  // Additional security checks
  const originalName = file.originalname.toLowerCase();
  
  // Block suspicious file names
  const suspiciousPatterns = [
    /\.exe$/i, /\.bat$/i, /\.cmd$/i, /\.scr$/i, /\.pif$/i,
    /\.com$/i, /\.vbs$/i, /\.js$/i, /\.jar$/i, /\.php$/i,
    /\.asp$/i, /\.jsp$/i, /\.py$/i, /\.rb$/i, /\.pl$/i
  ];
  
  if (suspiciousPatterns.some(pattern => pattern.test(originalName))) {
    return cb(new Error('Potentially dangerous file type'), false);
  }
  
  cb(null, true);
};

// Multer configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: MAX_FILES,
    fieldSize: 1024 * 1024, // 1MB field size limit
    fieldNameSize: 100,
    headerPairs: 2000
  }
});

// Authentication middleware
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({
      error: 'Authentication required',
      message: 'Please provide a valid authentication token'
    });
  }
  
  try {
    // Verify JWT token (implement your JWT verification logic)
    const decoded = verifyJWT(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error: 'Invalid token',
      message: 'Authentication token is invalid or expired'
    });
  }
};

// Input validation middleware
const validateUploadInput = [
  body('fileName')
    .optional()
    .isLength({ min: 1, max: 255 })
    .matches(/^[a-zA-Z0-9._-]+$/)
    .withMessage('Invalid file name format'),
  body('fileId')
    .optional()
    .isAlphanumeric()
    .isLength({ min: 10, max: 50 })
    .withMessage('Invalid file ID format'),
  body('checksum')
    .optional()
    .isHexadecimal()
    .isLength({ min: 64, max: 64 })
    .withMessage('Invalid checksum format')
];

// Error handling middleware
const handleUploadErrors = (error, req, res, next) => {
  console.error('Upload error:', error);
  
  if (error instanceof multer.MulterError) {
    switch (error.code) {
      case 'LIMIT_FILE_SIZE':
        return res.status(413).json({
          error: 'File too large',
          message: `File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit`,
          maxSize: MAX_FILE_SIZE
        });
      case 'LIMIT_FILE_COUNT':
        return res.status(413).json({
          error: 'Too many files',
          message: `Maximum ${MAX_FILES} files allowed`,
          maxFiles: MAX_FILES
        });
      case 'LIMIT_UNEXPECTED_FILE':
        return res.status(400).json({
          error: 'Unexpected file field',
          message: 'Unexpected file field in upload'
        });
      default:
        return res.status(400).json({
          error: 'Upload error',
          message: error.message
        });
    }
  }
  
  if (error.message.includes('File type') || error.message.includes('dangerous')) {
    return res.status(400).json({
      error: 'Invalid file type',
      message: error.message
    });
  }
  
  return res.status(500).json({
    error: 'Internal server error',
    message: 'An unexpected error occurred during upload'
  });
};

// Main upload processing middleware
const processUpload = async (req, res, next) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }
    
    if (!req.file) {
      return res.status(400).json({
        error: 'No file uploaded',
        message: 'Please select a file to upload'
      });
    }
    
    const file = req.file;
    const filePath = file.path;
    
    // Perform virus scan
    const scanResult = await performVirusScan(filePath);
    if (!scanResult.clean) {
      // Delete the infected file
      await fs.unlink(filePath);
      return res.status(400).json({
        error: 'Security threat detected',
        message: scanResult.threat || scanResult.error || 'File failed security scan'
      });
    }
    
    // Verify file integrity if checksum provided
    if (req.body.checksum) {
      const fileBuffer = await fs.readFile(filePath);
      const calculatedChecksum = crypto
        .createHash('sha256')
        .update(fileBuffer)
        .digest('hex');
      
      if (calculatedChecksum !== req.body.checksum) {
        await fs.unlink(filePath);
        return res.status(400).json({
          error: 'File integrity check failed',
          message: 'File checksum does not match'
        });
      }
    }
    
    // Generate file metadata
    const fileStats = await fs.stat(filePath);
    const fileMetadata = {
      id: req.body.fileId || crypto.randomUUID(),
      originalName: sanitizeFileName(file.originalname),
      fileName: file.filename,
      mimeType: file.mimetype,
      size: fileStats.size,
      uploadedAt: new Date().toISOString(),
      uploadedBy: req.user?.id,
      path: filePath,
      checksum: req.body.checksum,
      scanResult: scanResult
    };
    
    // Store file metadata in database (implement your database logic)
    // await saveFileMetadata(fileMetadata);
    
    // Generate secure download URL
    const downloadToken = crypto.randomBytes(32).toString('hex');
    const downloadUrl = `/api/files/download/${fileMetadata.id}?token=${downloadToken}`;
    
    // Store download token (implement your token storage logic)
    // await storeDownloadToken(fileMetadata.id, downloadToken, req.user?.id);
    
    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        id: fileMetadata.id,
        name: fileMetadata.originalName,
        size: fileMetadata.size,
        type: fileMetadata.mimeType,
        uploadedAt: fileMetadata.uploadedAt,
        downloadUrl: downloadUrl
      }
    });
    
  } catch (error) {
    console.error('Upload processing error:', error);
    
    // Clean up file on error
    if (req.file?.path) {
      try {
        await fs.unlink(req.file.path);
      } catch (cleanupError) {
        console.error('File cleanup error:', cleanupError);
      }
    }
    
    next(error);
  }
};

// JWT verification function (implement based on your auth system)
const verifyJWT = (token) => {
  // Implement your JWT verification logic here
  // This is a placeholder - replace with actual implementation
  try {
    const jwt = require('jsonwebtoken');
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

module.exports = {
  uploadLimiter,
  authenticatedUploadLimiter,
  requireAuth,
  validateUploadInput,
  upload,
  processUpload,
  handleUploadErrors,
  performVirusScan,
  sanitizeFileName,
  generateSecureFileName
};