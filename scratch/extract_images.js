const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = '/Users/amalegalsolutions/Desktop/AMAWORK/amaconnect/amaconnect/public';

const svgFiles = [
  { name: 'Interview.svg', outName: 'Interview.png', width: 1920 },
  { name: 'Community.svg', outName: 'Community.png', width: 1920 }
];

async function run() {
  for (const file of svgFiles) {
    const svgPath = path.join(publicDir, file.name);
    if (!fs.existsSync(svgPath)) {
      console.log(`SVG file not found: ${file.name}`);
      continue;
    }
    
    console.log(`Reading ${file.name}...`);
    const content = fs.readFileSync(svgPath, 'utf8');
    
    // Find base64 image
    const match = content.match(/xlink:href="data:image\/(png|jpeg);base64,([^"]+)"/);
    if (!match) {
      console.log(`No base64 image found in ${file.name}`);
      continue;
    }
    
    const type = match[1];
    const base64Data = match[2];
    console.log(`Found base64 image of type ${type} in ${file.name}. Decoding...`);
    
    const buffer = Buffer.from(base64Data, 'base64');
    const tempOutPath = path.join(publicDir, 'temp_' + file.outName);
    
    try {
      // Use sharp to resize and compress in one go
      await sharp(buffer)
        .resize({ width: file.width })
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toFile(tempOutPath);
        
      const statsBefore = fs.statSync(svgPath);
      const statsAfter = fs.statSync(tempOutPath);
      
      const sizeBeforeMb = (statsBefore.size / (1024 * 1024)).toFixed(2);
      const sizeAfterKb = (statsAfter.size / 1024).toFixed(2);
      
      console.log(`Extracted & compressed to ${file.outName}:`);
      console.log(`- SVG size: ${sizeBeforeMb} MB`);
      console.log(`- PNG size: ${sizeAfterKb} KB`);
      
      const destPath = path.join(publicDir, file.outName);
      fs.renameSync(tempOutPath, destPath);
      console.log(`Successfully saved optimized image to ${file.outName}`);
    } catch (err) {
      console.error(`Error processing ${file.name}:`, err);
    }
  }
}

run();
