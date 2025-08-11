import { runTest } from "../index.js";

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const MOD = 1_000_000_007n;

    let powers = [];
    let bit = 0;
    while (n > 0) {
        if (n & 1) powers.push(1n << BigInt(bit));
        bit++;
        n >>= 1;
    }

    const prefix = Array(powers.length).fill(1n);
    prefix[0] = powers[0] % MOD;
    for (let i = 1; i < powers.length; i++) {
        prefix[i] = (prefix[i - 1] * powers[i]) % MOD;
    }

    const modPow = (base, exp) => {
        let res = 1n;
        while (exp > 0) {
            if (exp & 1n) res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp >>= 1n;
        }
        return res;
    };

    return queries.map(([left, right]) => {
        let prod = prefix[right];

        if(left > 0) {
            const inv = modPow(prefix[left - 1], MOD - 2n);
            prod = (prod * inv) % MOD;
        }

        return Number(prod);
    });
};



runTest(productQueries);