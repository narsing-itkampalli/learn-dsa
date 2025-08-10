import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

export async function runTest(func, ...mapFuncList) {
    const { filePath } = getCallerInfo(new Error().stack);
    const testcasesPath = path.relative(currentDir, dirname(fileURLToPath(filePath))) + '/testcases.js';

    const { default: testcases } = await import('./' + testcasesPath);

    let maxTime = 0;
    let maxSpace = 0;

    testcases.forEach(testcase => {
        testcase = Array.isArray(testcase) ? testcase : Object.values(testcase);
        const start = new Date().getTime();
        const startMemory = process.memoryUsage().heapUsed;
        let output = func(...testcase);
        global.gc?.();
        maxTime = Math.max(maxTime, new Date().getTime() - start);
        maxSpace = Math.max(maxSpace, process.memoryUsage().heapUsed - startMemory);
        mapFuncList.forEach(mapFunc => {
            output = mapFunc(output);
        });
        console.log(output);
    });

    console.log(`Time taken: ${maxTime}ms`);
    console.log(`Memory used: ${formatBytes(maxSpace)}`);
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