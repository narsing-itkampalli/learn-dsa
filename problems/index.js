import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

export async function runTest(func) {
    const { filePath } = getCallerInfo(new Error().stack);
    const testcasesPath = path.relative(currentDir, dirname(fileURLToPath(filePath))) + '/testcases.js';

    const { default: testcases } = await import('./' + testcasesPath);

    const start = new Date().getTime();
    const startMemory = process.memoryUsage().heapUsed;
    testcases.forEach(testcase => {
        console.log(func(...testcase));
    });

    global.gc?.();
    const endMemory = process.memoryUsage().heapUsed;

    console.log(`Time taken: ${new Date().getTime() - start}ms`);
    console.log(`Memory used: ${formatBytes(endMemory - startMemory)}`);
}

function getCallerInfo(stack) {
    const callerLine = stack.split('\n')[2].trim();

    let match = callerLine.match(/\((.*):(\d+):(\d+)\)/);
    if (!match) match = callerLine.match(/at (.*):(\d+):(\d+)/);

    if (match) {
        const [, filePath, line, column] = match;
        return { filePath, line: Number(line), column: Number(column) };
    } else {
        return null;
    }
}

function formatBytes(bytes) {
    if (bytes < 1024) {
        return `${bytes} Bytes`;
    } else if (bytes / 1024 < 1024) {
        return `${(bytes / 1024).toFixed(2)} KB`;
    } else {
        return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
    }
}