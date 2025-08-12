import { runTest } from "../index.js";

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const MOD = 1_000_000_007n;

    const powers = [];
    let base = 1;
    while (true) {
        const val = base ** x;
        if (val > n) break;
        powers.push(val);
        base++;
    }

    const dp = Array(n + 1).fill(0n);
    dp[0] = 1n;

    for (const p of powers) {
        for (let sum = n; sum >= p; sum--) {
            dp[sum] = (dp[sum] + dp[sum - p]) % MOD;
        }
    }

    return Number(dp[n]);
}

runTest(numberOfWays);