// const fs = require("fs");
// const folderName = process.argv[2] || "Project";

// fs.mkdirSync(folderName);
// fs.writeFileSync(`${folderName}/index.html`);
// fs.writeFileSync(`${folderName}/app.js`);
// fs.writeFileSync(`${folderName}/styles.css`);

const fs = require("fs");
const folderName = process.argv[2] || "Project";

// Create the directory
fs.mkdirSync(folderName);

// Create index.html
fs.writeFileSync(`${folderName}/index.html`, "");

// Create app.js
fs.writeFileSync(`${folderName}/app.js`, "");

// Create styles.css
fs.writeFileSync(`${folderName}/styles.css`, "");
