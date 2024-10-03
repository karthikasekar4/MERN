const fs = require('fs');
const path = require('path');

const uploadsDir = path.join(__dirname, 'uploads');

// Check if the uploads folder exists, create it if not
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
