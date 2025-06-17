const MOD = BigInt(1e9 + 7);

function countGoodArrays(n, m, k) {
    const fact = Array(n + 1).fill(1n);
    const invFact = Array(n + 1).fill(1n);

    for (let i = 1; i <= n; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }

    for (let i = 0; i <= n; i++) {
        invFact[i] = power(fact[i], MOD - 2n);
    }

    let result = nCr(n - 1, k, fact, invFact);
    result = (result * BigInt(m)) % MOD;
    result = (result * power(BigInt(m - 1), BigInt(n - k - 1))) % MOD;

    return Number(result);
}

function power(a, b) {
    a = BigInt(a) % MOD;
    b = BigInt(b);
    let result = 1n;

    while (b > 0n) {
        if ((b & 1n) === 1n) {
            result = (result * a) % MOD;
        }
        a = (a * a) % MOD;
        b >>= 1n;
    }

    return result;
}

function nCr(n, r, fact, invFact) {
    return (((fact[n] * invFact[n - r]) % MOD) * invFact[r]) % MOD;
}