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

    const dp = new Map();

    function dfs(i, sum) {
        if (sum === n) return 1n;
        if (sum > n || i >= powers.length) return 0n;

        const key = `${i},${sum}`;
        if (dp.has(key)) return dp.get(key);

        let take = dfs(i + 1, sum + powers[i]);
        let skip = dfs(i + 1, sum);

        const res = (take + skip) % MOD;
        dp.set(key, res);
        return res;
    }

    return Number(dfs(0, 0));
}

runTest(numberOfWays);