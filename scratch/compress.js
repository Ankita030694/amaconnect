const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = '/Users/amalegalsolutions/Desktop/AMAWORK/amaconnect/amaconnect/public';

const imagesToCompress = [
  { name: 'phone.png', type: 'png', resize: { width: 800 }, options: { quality: 80, compressionLevel: 9, palette: true } },
  { name: 'about-phone.png', type: 'png', resize: { width: 1200 }, options: { quality: 80, compressionLevel: 9, palette: true } },
  { name: 'slide_3rd.png', type: 'png', resize: { width: 800 }, options: { quality: 80, compressionLevel: 9, palette: true } },
  { name: 'cta-bg.jpg', type: 'jpg', resize: { width: 1200 }, options: { quality: 80, mozjpeg: true } },
  { name: 'hero_community.jpg', type: 'jpg', resize: { width: 800 }, options: { quality: 80, mozjpeg: true } },
  { name: 'lawyers.jpg', type: 'jpg', resize: { width: 800 }, options: { quality: 80, mozjpeg: true } },
  { name: 'aboutclients/settleloans.png', type: 'png', resize: { width: 400 }, options: { quality: 80, compressionLevel: 9, palette: true } },
  { name: 'aboutclients/societal.png', type: 'png', resize: { width: 400 }, options: { quality: 80, compressionLevel: 9, palette: true } }
];

async function run() {
  for (const img of imagesToCompress) {
    const filePath = path.join(publicDir, img.name);
    const tempPath = path.join(publicDir, 'temp_' + img.name.replace(/\//g, '_'));
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${img.name}`);
      continue;
    }
    const statsBefore = fs.statSync(filePath);
    const sizeBeforeKb = (statsBefore.size / 1024).toFixed(2);
    
    console.log(`Compressing & Resizing ${img.name} (before: ${sizeBeforeKb} KB)...`);
    
    try {
      let pipeline = sharp(filePath);
      
      if (img.resize) {
        pipeline = pipeline.resize(img.resize);
      }
      
      if (img.type === 'png') {
        pipeline = pipeline.png(img.options);
      } else {
        pipeline = pipeline.jpeg(img.options);
      }
      
      // Ensure directory for temp path exists
      const tempDir = path.dirname(tempPath);
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }
      
      await pipeline.toFile(tempPath);
      
      const statsAfter = fs.statSync(tempPath);
      const sizeAfterKb = (statsAfter.size / 1024).toFixed(2);
      const percentSaved = ((statsBefore.size - statsAfter.size) / statsBefore.size * 100).toFixed(2);
      
      console.log(`Saved to ${tempPath} (after: ${sizeAfterKb} KB, saved ${percentSaved}%)`);
      
      // Overwrite original
      fs.renameSync(tempPath, filePath);
      console.log(`Overwrote original ${img.name}`);
    } catch (err) {
      console.error(`Error compressing ${img.name}:`, err);
    }
  }
}

run();
