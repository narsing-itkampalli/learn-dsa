import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

export async function runTest(func) {
    const { filePath } = getCallerInfo(new Error().stack);
    const testcasesPath = path.relative(currentDir, dirname(fileURLToPath(filePath)))+'/testcases.js';

    const { default: testcases } = await import('./'+testcasesPath);

    let start = new Date().getTime();
    testcases.forEach(testcase => {
        console.log(func(...testcase));
    });

    console.log(`Time: ${new Date().getTime() - start}ms`);
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