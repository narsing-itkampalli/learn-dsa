import { runTest } from "../index.js";

/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
    const P = new Array(n + 1).fill(0);
    P[0] = 1;

    let currProbabSum = k > 0 ? 1 : 0;

    for (let i = 1; i <= n; i++) {
        P[i] = currProbabSum / maxPts;

        if (i < k) {
            currProbabSum += P[i];
        }

        if (i - maxPts >= 0 && i - maxPts < k) {
            currProbabSum -= P[i - maxPts];
        }
    }

    let ans = 0;
    for (let i = k; i <= n; i++) {
        ans += P[i];
    }

    return ans;
};

runTest(new21Game);