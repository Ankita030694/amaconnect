const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'public', 'indian_man.jpg');
const outputPath = path.join(__dirname, '..', 'public', 'indian_man.webp');

sharp(inputPath)
  .resize(224, 224, {
    fit: 'cover',
    position: 'centre'
  })
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully generated optimized WebP image:', info);
  })
  .catch(err => {
    console.error('Error generating image:', err);
    process.exit(1);
  });
