import { runTest } from "../index.js";

const INF = Number.MAX_SAFE_INTEGER;

/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function (fruits) {
    const n = fruits.length;

    let first = 0;
    for (let i = 0; i < n; ++i) {
        first += fruits[i][i];
    }

    const downDirs = [[1, -1], [1, 0], [1, 1]];
    const mem1 = Array.from({ length: n }, () => Array(n).fill(-1));
    const second = dfs(fruits, 0, n - 1, n - 1, mem1, downDirs);

    const rightDirs = [[-1, 1], [0, 1], [1, 1]];
    const mem2 = Array.from({ length: n }, () => Array(n).fill(-1));
    const third = dfs(fruits, n - 1, 0, n - 1, mem2, rightDirs);

    return first + second + third;
};

function dfs(fruits, row, col, moves, mem, dirs) {
    const n = fruits.length;

    if (row === n - 1 && col === n - 1)
        return moves === 0 ? 0 : INF;

    if (moves === 0 || row === col)
        return INF;

    if (mem[row][col] !== -1)
        return mem[row][col];

    let maxFruits = -1;

    for (const [dRow, dCol] of dirs) {
        const newRow = row + dRow;
        const newCol = col + dCol;

        if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
            const val = dfs(fruits, newRow, newCol, moves - 1, mem, dirs);
            if (val !== INF) {
                maxFruits = Math.max(maxFruits, val);
            }
        }
    }

    mem[row][col] = (maxFruits < 0 ? INF : fruits[row][col] + maxFruits);
    return mem[row][col];
}

runTest(maxCollectedFruits);