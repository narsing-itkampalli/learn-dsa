import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const problemName = args.join(' ');

if (!problemName) {
    console.error("❌ Please provide a problem name.");
    process.exit(1);
}

const folderName = problemName.replace('.', '').replaceAll(' ', '-').replaceAll(/[\'\"]/g, '');
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

// Create 1-solution.js
fs.writeFileSync(
    path.join(basePath, '1-solution.js'),
    `import { runTest } from "../index.js";\n\n`
);

// Create readme.md
fs.writeFileSync(
    path.join(basePath, 'readme.md'),
    `# ${problemName}

[Link]

## Approach 1: [Approach Name]
\`./1-solution.js\`
<!-- e.g., Bit Manipulation, Hash Map, Two Pointers, Sliding Window -->

### Explanation
<!-- Short description of how the approach works -->
1. Step-by-step breakdown of the logic.
2. Why this approach works for the problem.
3. Any special observations or tricks used.

### Time and Space Complexity

* **Time Complexity:** \`O(?)\`

  * Brief explanation of where each term comes from.
* **Space Complexity:** \`O(?)\`

  * Explain what extra data structures are used and their size.`
);

console.log(`✅ Added problem: "${problemName}"`);
