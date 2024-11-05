const fs = require('fs');
const { JSDOM } = require('jsdom');

// Load index.html
const htmlContent = fs.readFileSync('index.html', 'utf-8');
const dom = new JSDOM(htmlContent);

// Check for <title> tag
const titleElement = dom.window.document.querySelector('title');

if (titleElement && titleElement.textContent.trim()) {
  console.log('✅ Title tag is present and not empty');
  process.exit(0);
} else {
  console.error('❌ Title tag is missing or empty');
  process.exit(1); // Exit with error code
}
