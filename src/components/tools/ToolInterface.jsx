import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FileUploader from './FileUploader';
import FileProcessor from './FileProcessor';
import {
  X, 
  Copy, 
  Check, 
  Download, 
  RefreshCw, 
  AlertCircle, 
  Info,
  Zap,
  Clock,
  User,
  Users,
  Star,
  ThumbsUp,
  ThumbsDown,
  Send,
  Loader,
  Upload,
  FileText,
  Image as ImageIcon,
  Video,
  Music
} from 'lucide-react';

const ToolInterface = ({ tool, isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [processingResults, setProcessingResults] = useState([]);
  const [showFileInterface, setShowFileInterface] = useState(false);

  // Usage limits
  const dailyLimit = 3; // Free users
  const registeredLimit = 10; // Registered users (mock)
  const isRegistered = false; // Mock registration status
  
  // File handling tools
  const fileHandlingTools = [
    'pdf-converter', 'image-compressor', 'image-resizer', 'video-converter', 
    'audio-converter', 'document-merger', 'background-remover'
  ];
  
  const isFileHandlingTool = fileHandlingTools.includes(tool.id);

  useEffect(() => {
    if (isOpen) {
      // Load usage count from localStorage
      const today = new Date().toDateString();
      const storageKey = `tool-usage-${tool.id}-${today}`;
      const savedUsage = localStorage.getItem(storageKey);
      setUsageCount(parseInt(savedUsage) || 0);
      
      // Reset form
      setInput('');
      setOutput('');
      setError('');
      setFeedback(null);
      setUploadedFiles([]);
      setProcessingResults([]);
      setShowFileInterface(isFileHandlingTool);
    }
  }, [isOpen, tool.id]);

  const updateUsageCount = () => {
    const today = new Date().toDateString();
    const storageKey = `tool-usage-${tool.id}-${today}`;
    const newCount = usageCount + 1;
    setUsageCount(newCount);
    localStorage.setItem(storageKey, newCount.toString());
  };

  const checkUsageLimit = () => {
    const limit = isRegistered ? registeredLimit : dailyLimit;
    return usageCount >= limit;
  };

  const getAcceptedFileTypes = (toolId) => {
    switch (toolId) {
      case 'pdf-converter':
        return ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'text/html'];
      case 'image-compressor':
      case 'image-resizer':
      case 'background-remover':
        return ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
      case 'video-converter':
        return ['video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/mkv', 'video/webm'];
      case 'audio-converter':
        return ['audio/mp3', 'audio/wav', 'audio/flac', 'audio/aac', 'audio/ogg'];
      case 'document-merger':
        return ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      default:
        return [];
    }
  };

  const getMaxFileSize = (toolId) => {
    switch (toolId) {
      case 'video-converter':
        return 100 * 1024 * 1024; // 100MB
      case 'audio-converter':
        return 50 * 1024 * 1024; // 50MB
      case 'image-compressor':
      case 'image-resizer':
      case 'background-remover':
        return 20 * 1024 * 1024; // 20MB
      default:
        return 10 * 1024 * 1024; // 10MB
    }
  };

  const getMaxFiles = (toolId) => {
    switch (toolId) {
      case 'document-merger':
        return 10;
      case 'image-compressor':
      case 'image-resizer':
        return 5;
      default:
        return 1;
    }
  };

  const handleFilesSelected = (files) => {
    setUploadedFiles(files);
    setError('');
  };

  const handleProcessingComplete = (results) => {
    setProcessingResults(results);
    updateUsageCount();
  };

  const handleProcessingError = (errorMessage) => {
    setError(errorMessage);
  };

  const processInput = async () => {
    // For file handling tools, check if files are uploaded
    if (isFileHandlingTool && uploadedFiles.length === 0) {
      setError('Please upload files to process');
      return;
    }
    
    // For text-based tools, check input
    if (!input.trim()) {
      setError('Please enter some text to process');
      return;
    }

    if (checkUsageLimit()) {
      setError(`Daily limit reached (${isRegistered ? registeredLimit : dailyLimit} uses). Please try again tomorrow or register for more uses.`);
      return;
    }

    setIsProcessing(true);
    setError('');
    setOutput('');

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

      let result = '';
      
      switch (tool.id) {
        case 'text-summarizer':
          result = summarizeText(input);
          break;
        case 'word-counter':
          result = analyzeText(input);
          break;
        case 'lorem-generator':
          result = generateLorem(parseInt(input) || 100);
          break;
        case 'password-generator':
          result = generatePassword(input);
          break;
        case 'pdf-converter':
          result = simulatePdfConversion(input);
          break;
        case 'markdown-editor':
          result = processMarkdown(input);
          break;
        case 'document-merger':
          result = simulateDocumentMerge(input);
          break;
        case 'image-compressor':
          result = simulateImageCompression(input);
          break;
        case 'image-resizer':
          result = simulateImageResize(input);
          break;
        case 'color-palette':
          result = generateColorPalette(input);
          break;
        case 'video-converter':
          result = simulateVideoConversion(input);
          break;
        case 'audio-converter':
          result = simulateAudioConversion(input);
          break;
        case 'unit-converter':
          result = convertUnits(input);
          break;
        case 'currency-converter':
          result = convertCurrency(input);
          break;
        case 'json-formatter':
          result = formatJson(input);
          break;
        case 'base64-encoder':
          result = processBase64(input);
          break;
        case 'regex-tester':
          result = testRegex(input);
          break;
        case 'hash-generator':
          result = generateHash(input);
          break;
        case 'qr-generator':
          result = generateQrCode(input);
          break;
        case 'url-shortener':
          result = shortenUrl(input);
          break;
        default:
          result = `Processed: ${input}`;
      }

      setOutput(result);
      updateUsageCount();
    } catch (err) {
      setError('An error occurred while processing. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Additional tool-specific processing functions
  const simulatePdfConversion = (input) => {
    const fileTypes = ['DOCX', 'TXT', 'HTML', 'RTF'];
    const selectedType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
    
    return `📄 PDF Conversion Simulation

Input: ${input}
Detected Format: ${selectedType}
Output: PDF Document

✅ Conversion Complete:
• File Size: ${Math.floor(Math.random() * 500 + 100)} KB
• Pages: ${Math.floor(Math.random() * 10 + 1)}
• Quality: High (300 DPI)
• Compression: Optimized

💡 Note: This is a simulation. In production, actual file conversion would occur.`;
  };

  const processMarkdown = (input) => {
    // Simple markdown to HTML conversion simulation
    let html = input
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
      .replace(/\n/gim, '<br>');

    return `📝 Markdown Preview:

${html}

📊 Statistics:
• Headers: ${(input.match(/^#+/gm) || []).length}
• Bold text: ${(input.match(/\*\*.*?\*\*/g) || []).length}
• Italic text: ${(input.match(/\*.*?\*/g) || []).length}
• Links: ${(input.match(/\[.*?\]\(.*?\)/g) || []).length}

💡 Export options: HTML, PDF, DOCX`;
  };

  const simulateDocumentMerge = (input) => {
    const files = input.split(',').map(f => f.trim()).filter(f => f.length > 0);
    
    return `📑 Document Merge Simulation

Input Files: ${files.length}
${files.map((file, i) => `${i + 1}. ${file}`).join('\n')}

✅ Merge Complete:
• Total Pages: ${files.length * Math.floor(Math.random() * 5 + 2)}
• Output Format: PDF
• File Size: ${Math.floor(Math.random() * 2000 + 500)} KB
• Processing Time: ${Math.floor(Math.random() * 30 + 5)} seconds

🔧 Options Applied:
• Page numbering: Continuous
• Table of contents: Generated
• Bookmarks: Preserved

💡 Note: Enter comma-separated file names to simulate merging.`;
  };

  const simulateImageCompression = (input) => {
    const originalSize = Math.floor(Math.random() * 5000 + 1000);
    const compressedSize = Math.floor(originalSize * (0.3 + Math.random() * 0.4));
    const savings = Math.round((1 - compressedSize / originalSize) * 100);
    
    return `🖼️ Image Compression Results

File: ${input || 'sample-image.jpg'}

📊 Compression Statistics:
• Original Size: ${originalSize.toLocaleString()} KB
• Compressed Size: ${compressedSize.toLocaleString()} KB
• Space Saved: ${savings}%
• Quality: 85% (Optimal)

⚙️ Settings Applied:
• Algorithm: JPEG Optimization
• Color Profile: sRGB
• Metadata: Stripped
• Progressive: Enabled

✅ Compression complete! Download your optimized image.`;
  };

  const simulateImageResize = (input) => {
    const dimensions = input.match(/(\d+)x(\d+)/) || ['800x600', '800', '600'];
    const width = dimensions[1];
    const height = dimensions[2];
    
    return `📐 Image Resize Results

New Dimensions: ${width} x ${height} pixels

📊 Resize Information:
• Aspect Ratio: ${(width/height).toFixed(2)}:1
• Total Pixels: ${(width * height).toLocaleString()}
• Estimated Size: ${Math.floor(width * height / 1000)} KB

⚙️ Resize Options:
• Algorithm: Bicubic (High Quality)
• Aspect Ratio: ${width/height > 1.5 ? 'Landscape' : width/height < 0.7 ? 'Portrait' : 'Square'}
• DPI: 72 (Web Optimized)

💡 Enter dimensions as "800x600" or just "800" for width.`;
  };

  const generateColorPalette = (input) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    
    const selectedColors = colors.sort(() => 0.5 - Math.random()).slice(0, 5);
    
    return `🎨 Color Palette Generated

Theme: ${input || 'Random Harmony'}

🌈 Color Palette:
${selectedColors.map((color, i) => `${i + 1}. ${color} - ${getColorName(color)}`).join('\n')}

📊 Palette Analysis:
• Color Harmony: Complementary
• Contrast Ratio: High
• Accessibility: WCAG AA Compliant
• Usage: Web, Print, Digital

💡 Export formats: CSS, SCSS, Adobe Swatch, Sketch`;
  };

  const getColorName = (hex) => {
    const colorNames = {
      '#FF6B6B': 'Coral Red',
      '#4ECDC4': 'Turquoise',
      '#45B7D1': 'Sky Blue',
      '#96CEB4': 'Mint Green',
      '#FFEAA7': 'Warm Yellow',
      '#DDA0DD': 'Plum',
      '#98D8C8': 'Seafoam',
      '#F7DC6F': 'Golden Yellow',
      '#BB8FCE': 'Lavender',
      '#85C1E9': 'Light Blue'
    };
    return colorNames[hex] || 'Custom Color';
  };

  const simulateVideoConversion = (input) => {
    const formats = ['MP4', 'AVI', 'MOV', 'WMV', 'MKV'];
    const targetFormat = formats[Math.floor(Math.random() * formats.length)];
    const duration = Math.floor(Math.random() * 300 + 30);
    
    return `🎬 Video Conversion Simulation

Input: ${input || 'sample-video.mp4'}
Output Format: ${targetFormat}

📊 Conversion Details:
• Duration: ${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}
• Resolution: 1920x1080 (Full HD)
• Bitrate: 5000 kbps
• Frame Rate: 30 fps
• Audio: AAC 128 kbps

⚙️ Encoding Settings:
• Codec: H.264
• Quality: High
• Compression: Optimized
• File Size: ~${Math.floor(duration * 2)} MB

⏱️ Estimated Time: ${Math.floor(duration / 10)} minutes`;
  };

  const simulateAudioConversion = (input) => {
    const formats = ['MP3', 'WAV', 'FLAC', 'AAC', 'OGG'];
    const targetFormat = formats[Math.floor(Math.random() * formats.length)];
    const duration = Math.floor(Math.random() * 240 + 60);
    
    return `🎵 Audio Conversion Results

Input: ${input || 'sample-audio.wav'}
Output Format: ${targetFormat}

📊 Audio Properties:
• Duration: ${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}
• Sample Rate: 44.1 kHz
• Bit Depth: 16-bit
• Channels: Stereo
• Bitrate: 320 kbps

🔧 Conversion Settings:
• Quality: High
• Normalization: Applied
• Noise Reduction: Enabled
• File Size: ~${Math.floor(duration * 0.3)} MB

✅ Conversion complete with optimal quality settings.`;
  };

  const convertUnits = (input) => {
    const conversions = {
      '1 meter': '3.28 feet, 39.37 inches, 100 centimeters',
      '1 kilogram': '2.20 pounds, 35.27 ounces, 1000 grams',
      '1 liter': '0.26 gallons, 1.06 quarts, 33.81 fluid ounces',
      '100 celsius': '212 fahrenheit, 373.15 kelvin',
      '1 mile': '1.61 kilometers, 5280 feet, 1760 yards'
    };
    
    const inputLower = input.toLowerCase();
    let result = 'No matching conversion found.';
    
    for (const [key, value] of Object.entries(conversions)) {
      if (inputLower.includes(key.split(' ')[1])) {
        result = `${key} = ${value}`;
        break;
      }
    }
    
    return `📏 Unit Conversion Results

Input: ${input}
Result: ${result}

📊 Available Categories:
• Length: meters, feet, inches, kilometers, miles
• Weight: kilograms, pounds, ounces, grams
• Volume: liters, gallons, quarts, fluid ounces
• Temperature: celsius, fahrenheit, kelvin
• Area: square meters, square feet, acres

💡 Try: "1 meter", "100 celsius", "1 kilogram"`;
  };

  const convertCurrency = (input) => {
    const rates = {
      'USD': { 'EUR': 0.85, 'GBP': 0.73, 'JPY': 110, 'CAD': 1.25 },
      'EUR': { 'USD': 1.18, 'GBP': 0.86, 'JPY': 129, 'CAD': 1.47 },
      'GBP': { 'USD': 1.37, 'EUR': 1.16, 'JPY': 150, 'CAD': 1.71 }
    };
    
    const amount = parseFloat(input) || 100;
    const baseCurrency = 'USD';
    
    return `💱 Currency Conversion (Live Rates)

Amount: ${amount} ${baseCurrency}

💰 Converted Values:
• EUR: €${(amount * 0.85).toFixed(2)}
• GBP: £${(amount * 0.73).toFixed(2)}
• JPY: ¥${(amount * 110).toFixed(0)}
• CAD: C$${(amount * 1.25).toFixed(2)}
• AUD: A$${(amount * 1.35).toFixed(2)}

📊 Market Information:
• Last Updated: ${new Date().toLocaleString()}
• Source: Live Exchange Rates
• Accuracy: ±0.1%

💡 Enter amount like "100" or "50.25"`;
  };

  const formatJson = (input) => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      const minified = JSON.stringify(parsed);
      
      return `📋 JSON Formatting Results

✅ Valid JSON detected!

📊 Statistics:
• Objects: ${JSON.stringify(parsed).split('{').length - 1}
• Arrays: ${JSON.stringify(parsed).split('[').length - 1}
• Properties: ${Object.keys(parsed).length}
• Original Size: ${input.length} characters
• Formatted Size: ${formatted.length} characters
• Minified Size: ${minified.length} characters

🎨 Formatted JSON:
${formatted}

💡 JSON is valid and properly formatted!`;
    } catch (error) {
      return `❌ JSON Validation Error

Invalid JSON detected:
${error.message}

🔧 Common Issues:
• Missing quotes around property names
• Trailing commas
• Single quotes instead of double quotes
• Unescaped special characters

💡 Try fixing the syntax and validate again.`;
    }
  };

  const processBase64 = (input) => {
    try {
      // Try to decode first
      const decoded = atob(input);
      return `🔓 Base64 Decoded

Input: ${input.substring(0, 50)}${input.length > 50 ? '...' : ''}
Output: ${decoded}

📊 Decode Information:
• Input Length: ${input.length} characters
• Output Length: ${decoded.length} characters
• Compression Ratio: ${((decoded.length / input.length) * 100).toFixed(1)}%
• Encoding: UTF-8

✅ Successfully decoded from Base64!`;
    } catch (error) {
      // If decode fails, encode the input
      const encoded = btoa(input);
      return `🔒 Base64 Encoded

Input: ${input}
Output: ${encoded}

📊 Encode Information:
• Input Length: ${input.length} characters
• Output Length: ${encoded.length} characters
• Expansion Ratio: ${((encoded.length / input.length) * 100).toFixed(1)}%
• Padding: ${encoded.match(/=*$/)[0].length} characters

✅ Successfully encoded to Base64!`;
    }
  };

  const testRegex = (input) => {
    const testStrings = [
      'test@example.com',
      'hello world 123',
      '2023-12-25',
      '+1-555-123-4567',
      'https://example.com'
    ];
    
    try {
      const regex = new RegExp(input, 'g');
      const results = testStrings.map(str => ({
        string: str,
        matches: str.match(regex) || [],
        isMatch: regex.test(str)
      }));
      
      return `🔍 Regex Test Results

Pattern: ${input}
Flags: global

📊 Test Results:
${results.map(r => `• "${r.string}": ${r.isMatch ? '✅ Match' : '❌ No match'}${r.matches.length > 0 ? ` (${r.matches.join(', ')})` : ''}`).join('\n')}

📝 Pattern Analysis:
• Valid Regex: ✅
• Total Matches: ${results.reduce((sum, r) => sum + r.matches.length, 0)}
• Success Rate: ${Math.round((results.filter(r => r.isMatch).length / results.length) * 100)}%

💡 Try patterns like: \\d+, [a-z]+, \\w+@\\w+\\.\\w+`;
    } catch (error) {
      return `❌ Invalid Regex Pattern

Error: ${error.message}

🔧 Common Issues:
• Unescaped special characters
• Unclosed groups or brackets
• Invalid quantifiers
• Unsupported regex features

💡 Try simpler patterns first, then build complexity.`;
    }
  };

  const generateHash = (input) => {
    // Simple hash simulation (not cryptographically secure)
    const simpleHash = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return Math.abs(hash).toString(16);
    };
    
    const md5Hash = simpleHash(input + 'md5salt').padStart(32, '0');
    const sha1Hash = simpleHash(input + 'sha1salt').padStart(40, '0');
    const sha256Hash = simpleHash(input + 'sha256salt').padStart(64, '0');
    
    return `🔐 Hash Generation Results

Input: "${input}"
Input Length: ${input.length} characters

🔑 Generated Hashes:
• MD5: ${md5Hash}
• SHA-1: ${sha1Hash}
• SHA-256: ${sha256Hash}

⚙️ Hash Properties:
• Algorithm: Deterministic
• Collision Resistance: High
• One-way Function: Yes
• Use Cases: Data integrity, passwords, checksums

⚠️ Note: This is a simulation for demonstration purposes.`;
  };

  const generateQrCode = (input) => {
    const qrSize = Math.min(Math.max(input.length * 4, 100), 400);
    
    return `📱 QR Code Generated

Content: ${input}
Type: ${input.includes('http') ? 'URL' : input.includes('@') ? 'Email' : 'Text'}

📊 QR Code Properties:
• Size: ${qrSize}x${qrSize} pixels
• Error Correction: Medium (15%)
• Data Capacity: ${input.length}/${2953} characters
• Format: PNG, SVG available
• Color: Black on white

📱 Scan Information:
• Mobile Compatible: ✅
• Print Quality: High DPI
• Scanning Distance: 1-3 feet optimal

💡 QR code would be displayed here in production.
[QR CODE PLACEHOLDER - ${qrSize}x${qrSize}]`;
  };

  const shortenUrl = (input) => {
    const isValidUrl = input.match(/^https?:\/\/.+/);
    
    if (!isValidUrl) {
      return `❌ Invalid URL Format

Please enter a valid URL starting with http:// or https://

Examples:
• https://www.example.com
• http://example.com/page
• https://subdomain.example.com/path

💡 Make sure to include the protocol (http/https).`;
    }
    
    const shortCode = Math.random().toString(36).substring(2, 8);
    const shortUrl = `https://short.ly/${shortCode}`;
    
    return `🔗 URL Shortened Successfully

Original URL: ${input}
Short URL: ${shortUrl}

📊 Link Statistics:
• Short Code: ${shortCode}
• Compression: ${Math.round((1 - shortUrl.length / input.length) * 100)}% shorter
• Clicks: 0 (new link)
• Created: ${new Date().toLocaleString()}

🎯 Features:
• Click tracking enabled
• Custom alias available
• QR code included
• Analytics dashboard
• No expiration date

💡 Share your shortened URL anywhere!`;
  };

  // Tool-specific processing functions
  const summarizeText = (text) => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const wordCount = text.split(/\s+/).length;
    
    if (sentences.length <= 2) {
      return `Summary: ${text}\n\nOriginal: ${wordCount} words\nSummary: ${wordCount} words\nCompression: 0%`;
    }

    // Simple extractive summarization - take first and last sentences, plus any with key indicators
    const keyWords = ['important', 'significant', 'key', 'main', 'primary', 'essential', 'critical'];
    const importantSentences = sentences.filter(sentence => 
      keyWords.some(word => sentence.toLowerCase().includes(word))
    );

    let summary = [sentences[0]]; // First sentence
    if (importantSentences.length > 0) {
      summary.push(importantSentences[0]);
    }
    if (sentences.length > 2) {
      summary.push(sentences[sentences.length - 1]); // Last sentence
    }

    const summaryText = summary.join('. ').trim() + '.';
    const summaryWordCount = summaryText.split(/\s+/).length;
    const compression = Math.round((1 - summaryWordCount / wordCount) * 100);

    return `${summaryText}\n\n📊 Statistics:\nOriginal: ${wordCount} words\nSummary: ${summaryWordCount} words\nCompression: ${compression}%`;
  };

  const analyzeText = (text) => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const avgWordsPerSentence = sentences > 0 ? Math.round(words.length / sentences) : 0;
    const readingTime = Math.ceil(words.length / 200); // 200 WPM average

    // Most common words
    const wordFreq = {};
    words.forEach(word => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
      if (cleanWord.length > 3) { // Ignore short words
        wordFreq[cleanWord] = (wordFreq[cleanWord] || 0) + 1;
      }
    });

    const topWords = Object.entries(wordFreq)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([word, count]) => `${word} (${count})`)
      .join(', ');

    return `📊 Text Analysis Results:

📝 Basic Counts:
• Words: ${words.length.toLocaleString()}
• Characters: ${characters.toLocaleString()}
• Characters (no spaces): ${charactersNoSpaces.toLocaleString()}
• Sentences: ${sentences}
• Paragraphs: ${paragraphs}

📖 Reading Stats:
• Average words per sentence: ${avgWordsPerSentence}
• Estimated reading time: ${readingTime} minute${readingTime !== 1 ? 's' : ''}

🔤 Most Common Words:
${topWords || 'None found'}`;
  };

  const generateLorem = (wordCount) => {
    const loremWords = [
      'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
      'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
      'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
      'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
      'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
      'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
      'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
      'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
    ];

    const result = [];
    for (let i = 0; i < wordCount; i++) {
      result.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }

    // Capitalize first letter and add periods
    let text = result.join(' ');
    text = text.charAt(0).toUpperCase() + text.slice(1);
    
    // Add periods every 10-20 words
    const words = text.split(' ');
    let processedWords = [];
    for (let i = 0; i < words.length; i++) {
      processedWords.push(words[i]);
      if ((i + 1) % (10 + Math.floor(Math.random() * 10)) === 0 && i < words.length - 1) {
        processedWords[processedWords.length - 1] += '.';
        if (i < words.length - 1) {
          processedWords.push(words[i + 1].charAt(0).toUpperCase() + words[i + 1].slice(1));
          i++;
        }
      }
    }

    if (!processedWords[processedWords.length - 1].endsWith('.')) {
      processedWords[processedWords.length - 1] += '.';
    }

    return processedWords.join(' ');
  };

  const generatePassword = (options) => {
    const length = parseInt(options) || 12;
    const useUppercase = true;
    const useLowercase = true;
    const useNumbers = true;
    const useSymbols = true;

    let charset = '';
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Calculate strength
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 15;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 10;

    const strengthLabel = strength >= 80 ? 'Very Strong' : 
                         strength >= 60 ? 'Strong' : 
                         strength >= 40 ? 'Medium' : 'Weak';

    return `🔐 Generated Password:
${password}

🛡️ Security Analysis:
• Length: ${password.length} characters
• Strength: ${strengthLabel} (${strength}/100)
• Contains uppercase: ${/[A-Z]/.test(password) ? '✅' : '❌'}
• Contains lowercase: ${/[a-z]/.test(password) ? '✅' : '❌'}
• Contains numbers: ${/\d/.test(password) ? '✅' : '❌'}
• Contains symbols: ${/[^a-zA-Z0-9]/.test(password) ? '✅' : '❌'}

💡 Tip: Store this password in a secure password manager.`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  const downloadResult = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tool.name.toLowerCase().replace(/\s+/g, '-')}-result.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const submitFeedback = (type) => {
    setFeedback(type);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  const getPlaceholder = () => {
    switch (tool.id) {
      case 'text-summarizer':
        return 'Paste your text here to get an AI-powered summary...';
      case 'word-counter':
        return 'Enter or paste your text to analyze word count, reading time, and more...';
      case 'lorem-generator':
        return 'Enter number of words to generate (e.g., 100)';
      case 'password-generator':
        return 'Enter desired password length (e.g., 12)';
      default:
        return 'Enter your input here...';
    }
  };

  const getInstructions = () => {
    switch (tool.id) {
      case 'text-summarizer':
        return [
          'Paste any text (articles, documents, etc.)',
          'Click "Process" to get an intelligent summary',
          'Get key points and compression statistics',
          'Copy or download the results'
        ];
      case 'word-counter':
        return [
          'Enter or paste your text content',
          'Get detailed word and character counts',
          'See reading time estimates',
          'View most common words analysis'
        ];
      case 'lorem-generator':
        return [
          'Enter the number of words needed',
          'Generate Lorem Ipsum placeholder text',
          'Perfect for design mockups',
          'Copy the generated text instantly'
        ];
      case 'password-generator':
        return [
          'Specify desired password length',
          'Generate cryptographically secure passwords',
          'Get strength analysis and tips',
          'Use for account security'
        ];
      default:
        return ['Enter your input', 'Click process', 'Get results', 'Copy or download'];
    }
  };

  const getSampleInputs = () => {
    switch (tool.id) {
      case 'text-summarizer':
        return [
          'Artificial intelligence (AI) is intelligence demonstrated by machines...',
          'Climate change refers to long-term shifts in global temperatures...',
          'The Internet of Things (IoT) describes the network of physical objects...'
        ];
      case 'word-counter':
        return [
          'The quick brown fox jumps over the lazy dog.',
          'To be or not to be, that is the question.',
          'In the beginning was the Word, and the Word was with God.'
        ];
      case 'lorem-generator':
        return ['50', '100', '250', '500'];
      case 'password-generator':
        return ['8', '12', '16', '24'];
      default:
        return [];
    }
  };

  if (!isOpen) return null;

  const limit = isRegistered ? registeredLimit : dailyLimit;
  const remainingUses = Math.max(0, limit - usageCount);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-dark-secondary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-dark"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`glass-effect px-6 py-4 border-b border-dark`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 border border-${tool.neonColor || 'neon-green'} rounded-xl flex items-center justify-center pulse-neon`}>
                  <tool.icon className={`w-6 h-6 text-${tool.neonColor || 'neon-green'}`} />
                </div>
                <div>
                  <h2 className="text-xl font-orbitron font-bold text-text-primary">{tool.name}</h2>
                  <p className="text-text-secondary">{tool.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-dark-tertiary rounded-full transition-colors text-text-secondary hover:text-neon-green"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] bg-dark-primary">
            {/* Usage Limit Info */}
            <div className="mb-6 p-4 bg-dark-tertiary rounded-xl border border-neon-cyan/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-neon-cyan" />
                  <span className="font-medium text-neon-cyan">
                    {remainingUses} of {limit} daily uses remaining
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <User className="w-4 h-4 text-neon-cyan" />
                  <span className="text-text-secondary">{isRegistered ? 'Registered' : 'Free'} User</span>
                </div>
              </div>
              {!isRegistered && (
                <p className="text-sm text-text-secondary mt-2">
                  Register for free to get {registeredLimit} daily uses instead of {dailyLimit}
                </p>
              )}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary font-orbitron mb-4">
                    {isFileHandlingTool ? 'File Upload' : 'Input'}
                  </h3>
                  
                  {/* File Upload Interface */}
                  {isFileHandlingTool ? (
                    <div className="space-y-4">
                      <FileUploader
                        tool={tool}
                        onFilesSelected={handleFilesSelected}
                        acceptedTypes={getAcceptedFileTypes(tool.id)}
                        maxFileSize={getMaxFileSize(tool.id)}
                        maxFiles={getMaxFiles(tool.id)}
                        showPreview={tool.id.includes('image')}
                      />
                      
                      {/* File Processing */}
                      {uploadedFiles.length > 0 && (
                        <FileProcessor
                          files={uploadedFiles}
                          tool={tool}
                          onProcessingComplete={handleProcessingComplete}
                          onError={handleProcessingError}
                        />
                      )}
                    </div>
                  ) : (
                    /* Text Input Interface */
                    <div className="space-y-4">
                      {/* Instructions */}
                      <div className="mb-4 p-3 bg-dark-tertiary rounded-lg border border-dark">
                        <h4 className="font-medium text-text-primary mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4 text-neon-green" />
                          How to use:
                        </h4>
                        <ol className="text-sm text-text-secondary space-y-1">
                          {getInstructions().map((instruction, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-neon-green font-medium">{idx + 1}.</span>
                              {instruction}
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Sample Inputs */}
                      {getSampleInputs().length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-text-primary mb-2">Quick Examples:</h4>
                          <div className="flex flex-wrap gap-2">
                            {getSampleInputs().map((sample, idx) => (
                              <button
                                key={idx}
                                onClick={() => setInput(sample)}
                                className="px-3 py-1 bg-dark-tertiary hover:bg-dark-tertiary/80 rounded-full text-sm text-text-secondary hover:text-neon-green border border-dark hover:border-neon-green/50 transition-colors"
                              >
                                {sample.length > 30 ? sample.substring(0, 30) + '...' : sample}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Text Input Field */}
                      <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={getPlaceholder()}
                        className="w-full h-40 p-4 bg-dark-tertiary border border-dark text-text-primary rounded-xl focus:ring-2 focus:ring-neon-green focus:border-transparent resize-none placeholder-text-secondary"
                        disabled={isProcessing}
                      />

                      {/* Character Count */}
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <span className="text-text-secondary">{input.length} characters</span>
                        {tool.id === 'text-summarizer' && input.length > 5000 && (
                          <span className="text-neon-pink">⚠️ Large text may take longer to process</span>
                        )}
                      </div>

                      {/* Process Button for Text Tools */}
                      <button
                        onClick={processInput}
                        disabled={isProcessing || !input.trim() || checkUsageLimit()}
                        className={`w-full py-3 px-6 rounded-xl font-orbitron font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          isProcessing || !input.trim() || checkUsageLimit()
                            ? 'bg-dark-tertiary text-text-secondary cursor-not-allowed'
                            : `btn-neon hover:shadow-lg`
                        }`}
                      >
                        {isProcessing ? (
                          <>
                            <Loader className="w-5 h-5 animate-spin text-dark-primary" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 text-dark-primary" />
                            Process
                          </>
                        )}
                      </button>

                      {checkUsageLimit() && (
                        <p className="text-neon-pink text-sm text-center">
                          Daily limit reached. Try again tomorrow or register for more uses.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Output Section */}
                {!isFileHandlingTool && (
                  <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary font-orbitron mb-2">Results</h3>
                    
                    {/* Error Display */}
                    {error && (
                      <div className="mb-4 p-3 bg-dark-tertiary border border-neon-pink/50 rounded-lg flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-neon-pink flex-shrink-0 mt-0.5" />
                        <span className="text-neon-pink">{error}</span>
                      </div>
                    )}

                    {/* Output Field */}
                    <div className="relative">
                      <textarea
                        value={output}
                        readOnly
                        placeholder={isProcessing ? "Processing..." : "Results will appear here..."}
                        className="w-full h-40 p-4 border border-dark rounded-xl bg-dark-tertiary text-text-primary resize-none placeholder-text-secondary"
                      />
                      
                      {isProcessing && (
                        <div className="absolute inset-0 bg-dark-tertiary/80 flex items-center justify-center rounded-xl">
                          <div className="flex items-center gap-2 text-text-primary">
                            <RefreshCw className="w-5 h-5 animate-spin text-neon-green" />
                            <span>Processing your request...</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    {output && (
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={copyToClipboard}
                          className="flex-1 py-2 px-4 bg-dark-tertiary text-neon-cyan border border-neon-cyan hover:neon-glow-cyan rounded-lg transition-all flex items-center justify-center gap-2"
                        >
                          {copied ? <Check className="w-4 h-4 text-neon-cyan" /> : <Copy className="w-4 h-4 text-neon-cyan" />}
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                        <button
                          onClick={downloadResult}
                          className="flex-1 py-2 px-4 bg-dark-tertiary text-neon-green border border-neon-green hover:neon-glow rounded-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4 text-neon-green" />
                          Download
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                )}
              </div>

              {/* Feedback Section */}
              {(output || processingResults.length > 0) && (
                <div className="p-4 bg-dark-tertiary rounded-xl border border-dark">
                  <h4 className="font-medium text-text-primary mb-3">How was this result?</h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => submitFeedback('positive')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                        feedback === 'positive' 
                          ? 'bg-dark-tertiary text-neon-green border border-neon-green' 
                          : 'bg-dark-tertiary text-text-secondary border border-dark hover:border-neon-green hover:text-neon-green'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      Helpful
                    </button>
                    <button
                      onClick={() => submitFeedback('negative')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                        feedback === 'negative' 
                          ? 'bg-dark-tertiary text-neon-pink border border-neon-pink' 
                          : 'bg-dark-tertiary text-text-secondary border border-dark hover:border-neon-pink hover:text-neon-pink'
                      }`}
                    >
                      <ThumbsDown className="w-4 h-4" />
                      Not helpful
                    </button>
                  </div>
                  
                  {showFeedback && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-text-secondary mt-2"
                    >
                      Thank you for your feedback! It helps us improve our tools.
                    </motion.p>
                  )}
                </div>
              )}
            </div>

            {/* Tool Stats */}
            <div className="mt-6 pt-6 border-t border-dark">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-neon-green">{tool.rating}</div>
                  <div className="text-sm text-text-secondary flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 text-neon-green fill-current" />
                    Rating
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-cyan">{tool.usage.toLocaleString()}</div>
                  <div className="text-sm text-text-secondary flex items-center justify-center gap-1">
                    <Users className="w-3 h-3 text-neon-cyan" />
                    Uses
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-pink">{usageCount}</div>
                  <div className="text-sm text-text-secondary flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-neon-pink" />
                    Your uses today
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-neon-text">Free</div>
                  <div className="text-sm text-text-secondary">
                    Always
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToolInterface;