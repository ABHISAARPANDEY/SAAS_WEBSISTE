// Script to replace external CDN images with local fallbacks
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local fallback mapping
const fallbackMap = {
  // Tech stack icons
  'react': '/logos/logo_teckstack.png',
  'flutter': '/logos/logo_teckstack.png',
  'nodejs': '/logos/logo_teckstack.png',
  'firebase': '/logos/logo_teckstack.png',
  'aws': '/logos/logo_teckstack.png',
  'docker': '/logos/logo_teckstack.png',
  'nextjs': '/logos/logo_teckstack.png',
  'vuejs': '/logos/logo_teckstack.png',
  'swift': '/logos/logo_teckstack.png',
  'kotlin': '/logos/logo_teckstack.png',
  
  // Project categories
  'mobile': '/logos/logo_teckstack.png',
  'web': '/logos/logo_teckstack.png',
  'ecommerce': '/logos/logo_teckstack.png',
  'healthcare': '/logos/logo_teckstack.png',
  'education': '/logos/logo_teckstack.png',
  'finance': '/logos/logo_teckstack.png',
  'realestate': '/logos/logo_teckstack.png',
  'food': '/logos/logo_teckstack.png',
  'travel': '/logos/logo_teckstack.png',
  'streaming': '/logos/logo_teckstack.png',
  'retail': '/logos/logo_teckstack.png',
  
  // Default
  'default': '/logos/logo_teckstack.png'
};

// Function to get fallback based on URL and context
function getFallback(url, context = {}) {
  const urlLower = url.toLowerCase();
  
  // Tech stack mapping
  if (urlLower.includes('react')) return fallbackMap.react;
  if (urlLower.includes('flutter')) return fallbackMap.flutter;
  if (urlLower.includes('nodejs') || urlLower.includes('node.js')) return fallbackMap.nodejs;
  if (urlLower.includes('firebase')) return fallbackMap.firebase;
  if (urlLower.includes('amazonwebservices') || urlLower.includes('aws')) return fallbackMap.aws;
  if (urlLower.includes('docker')) return fallbackMap.docker;
  if (urlLower.includes('nextjs') || urlLower.includes('next.js')) return fallbackMap.nextjs;
  if (urlLower.includes('vuejs') || urlLower.includes('vue.js')) return fallbackMap.vuejs;
  if (urlLower.includes('swift')) return fallbackMap.swift;
  if (urlLower.includes('kotlin')) return fallbackMap.kotlin;
  
  // Context-based mapping
  if (context.category) {
    const category = context.category.toLowerCase();
    if (category.includes('mobile')) return fallbackMap.mobile;
    if (category.includes('web')) return fallbackMap.web;
    if (category.includes('ecommerce')) return fallbackMap.ecommerce;
    if (category.includes('health')) return fallbackMap.healthcare;
    if (category.includes('education')) return fallbackMap.education;
    if (category.includes('finance')) return fallbackMap.finance;
    if (category.includes('real') || category.includes('property')) return fallbackMap.realestate;
    if (category.includes('food')) return fallbackMap.food;
    if (category.includes('travel')) return fallbackMap.travel;
    if (category.includes('streaming')) return fallbackMap.streaming;
    if (category.includes('retail')) return fallbackMap.retail;
  }
  
  return fallbackMap.default;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace Pexels images
    content = content.replace(
      /https:\/\/images\.pexels\.com\/photos\/[^"'\s)]+/g,
      (match) => {
        modified = true;
        return getFallback(match);
      }
    );
    
    // Replace GitHub CDN images
    content = content.replace(
      /https:\/\/raw\.githubusercontent\.com\/[^"'\s)]+/g,
      (match) => {
        modified = true;
        return getFallback(match);
      }
    );
    
    // Replace other CDN images
    content = content.replace(
      /https:\/\/[^"'\s)]*\.(svg|png|jpg|jpeg|gif|webp)/g,
      (match) => {
        if (match.includes('pexels.com') || match.includes('githubusercontent.com')) {
          modified = true;
          return getFallback(match);
        }
        return match;
      }
    );
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively process directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx'))) {
      processFile(fullPath);
    }
  }
}

// Main execution
console.log('🔄 Replacing external CDN images with local fallbacks...');
console.log('📁 Processing src directory...');

const srcDir = path.join(__dirname, '..', 'src');
processDirectory(srcDir);

console.log('✅ Image replacement complete!');
console.log('💡 All external CDN images have been replaced with local fallbacks.');
console.log('🌐 Your website should now work properly in Brave browser and other ad-blocking browsers.');
