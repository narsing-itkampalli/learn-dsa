let fact = null;
let invFact = null;

var countGoodArrays = function(n, m, k) {
  precompute(n);

  const nMinus1 = n - 1;
  const nMinusKMinus1 = n - k - 1;

  const runWays = (fact[nMinus1] * invFact[nMinusKMinus1] % MOD) * invFact[k] % MOD;
  const waysToAssign = (BigInt(m) * binaryExp(BigInt(m - 1), BigInt(nMinusKMinus1))) % MOD;

  return Number((runWays * waysToAssign) % MOD);
}

// Binary exponentiation: (a^b) % MOD
function binaryExp(a, b) {
  a = BigInt(a) % MOD;
  b = BigInt(b);
  let res = 1n;

  while (b > 0n) {
    if (b & 1n) {
      res = (res * a) % MOD;
    }
    a = (a * a) % MOD;
    b >>= 1n;
  }

  return res;
}

// Modular Multiplicative Inverse using Fermat’s Little Theorem
function mmi(val) {
  return binaryExp(val, MOD - 2n);
}

// Precompute factorials up to n
function factorial(n) {
  fact = Array(n + 1).fill(1n);
  for (let i = 1; i <= n; i++) {
    fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  }
}

// Precompute inverse factorials using previously computed factorials
function inverseFact(n) {
  invFact = Array(n + 1).fill(0n);
  invFact[n] = mmi(fact[n]);
  for (let i = n; i >= 1; i--) {
    invFact[i - 1] = (invFact[i] * BigInt(i)) % MOD;
  }
}

function precompute(n) {
  factorial(n);
  inverseFact(n);
}
