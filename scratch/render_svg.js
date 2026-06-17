const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = '/Users/amalegalsolutions/Desktop/AMAWORK/amaconnect/amaconnect/public';

async function run() {
  const files = [
    { in: 'Interview.svg', out: 'Interview.png', width: 1920 },
    { in: 'Community.svg', out: 'Community.png', width: 1920 }
  ];
  
  for (const file of files) {
    const inPath = path.join(publicDir, file.in);
    const outPath = path.join(publicDir, file.out);
    
    if (!fs.existsSync(inPath)) {
      console.log(`File not found: ${file.in}`);
      continue;
    }
    
    console.log(`Rasterizing ${file.in} to ${file.out} at width ${file.width}...`);
    try {
      await sharp(inPath)
        .resize({ width: file.width })
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toFile(outPath);
        
      const statsBefore = fs.statSync(inPath);
      const statsAfter = fs.statSync(outPath);
      console.log(`Successfully rendered ${file.out}:`);
      console.log(`- SVG size: ${(statsBefore.size / 1024 / 1024).toFixed(2)} MB`);
      console.log(`- PNG size: ${(statsAfter.size / 1024).toFixed(2)} KB`);
    } catch (err) {
      console.error(`Error rendering ${file.in}:`, err);
    }
  }
}

run();
