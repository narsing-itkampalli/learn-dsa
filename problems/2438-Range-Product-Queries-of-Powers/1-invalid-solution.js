import { runTest } from "../index.js";

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const powers = [];

    const binary = n.toString(2).split('').reverse().map((a) => Number(a));
    binary.forEach((num, i) => num !== 0 && powers.push(2 ** i));

    return queries.map(([from, to]) => {
        let res = 1;
        for (let i = from; i <= to; i++) res *= powers[i];
        return res;
    });
};


runTest(productQueries, JSON.stringify);