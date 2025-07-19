import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const problemName = args.join(' ');

if (!problemName) {
    console.error("❌ Please provide a problem name.");
    process.exit(1);
}

const folderName = problemName.replace('.', '').replaceAll(' ', '-');
const basePath = path.join(process.cwd(), 'problems', folderName);

if (fs.existsSync(basePath)) {
    console.error("❌ Problem folder already exists.");
    process.exit(1);
}

// ✅ Create folder
fs.mkdirSync(basePath, { recursive: true });

// Create testcases.js
fs.writeFileSync(
    path.join(basePath, 'testcases.js'),
    `export default [\n    \n]`
);

// Create readme.md
fs.writeFileSync(
    path.join(basePath, 'readme.md'),
    `# ${problemName}\n`
);

console.log(`✅ Added problem: "${problemName}"`);
