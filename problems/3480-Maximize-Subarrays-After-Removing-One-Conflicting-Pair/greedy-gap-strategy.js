import { runTest } from "../index.js";

/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function (n, conflictingPairs) {
    const m = conflictingPairs.length;

    for (let i = 0; i < m; ++i) {
        if (conflictingPairs[i][0] > conflictingPairs[i][1]) {
            const temp = conflictingPairs[i][0];
            conflictingPairs[i][0] = conflictingPairs[i][1];
            conflictingPairs[i][1] = temp;
        }
    }

    conflictingPairs.sort((a, b) => a[1] - b[1]);

    let blocked = 0n;
    let profit = 0n;
    let maxProfit = 0n;
    let max1 = 0;
    let max2 = 0;

    for (let i = 0; i < m; ++i) {
        const start = conflictingPairs[i][0];
        const bottom = i < m - 1 ? conflictingPairs[i + 1][1] : n + 1;
        const gap = BigInt(bottom - conflictingPairs[i][1]);

        if (start > max1) {
            max2 = max1;
            max1 = start;
            profit = 0n;
        } else if (start > max2) {
            max2 = start;
        }

        profit += BigInt(max1 - max2) * gap;
        if (profit > maxProfit) {
            maxProfit = profit;
        }

        blocked += BigInt(max1) * gap;
    }

    const totalSubarrays = BigInt(n) * BigInt(n + 1) / 2n;
    return Number(totalSubarrays - blocked + maxProfit);
};

runTest(maxSubarrays);