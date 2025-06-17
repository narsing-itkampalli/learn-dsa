const MOD = 1e9 + 7;

function countGoodArrays(n, m, k) {
    let dp = new Array(k + 1).fill(0);
    dp[0] = m;

    for (let i = 2; i <= n; i++) {
        const newDp = new Array(k + 1).fill(0);
        for (let j = 0; j <= k; j++) {
            newDp[j] = (dp[j] * (m - 1)) % MOD;

            if (j > 0) {
                newDp[j] = (newDp[j] + dp[j - 1]) % MOD;
            }
        }
        dp = newDp;
    }

    return dp[k];
}