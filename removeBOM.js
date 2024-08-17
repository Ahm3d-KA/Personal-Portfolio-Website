// removeBOM.js
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function removeBOM(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const bom = '\uFEFF';
    if (data.startsWith(bom)) {
        console.log(`Removing BOM from: ${filePath}`);
        fs.writeFileSync(filePath, data.slice(1), 'utf8');
    }
}

function traverseDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            traverseDirectory(fullPath);
        } else {
            removeBOM(fullPath);
        }
    });
}

traverseDirectory(directoryPath);
console.log('BOM removal complete.');