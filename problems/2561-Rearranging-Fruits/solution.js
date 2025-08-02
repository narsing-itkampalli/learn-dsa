import { runTest } from "../index.js";

/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    const balanceMap = {};
    const n = basket1.length;
    let min = Infinity;

    for(let i = 0; i < n; i++) {
        const itemA = basket1[i];
        const itemB = basket2[i];
        
        balanceMap[itemA] = (balanceMap[itemA] || 0) + 1;
        balanceMap[itemB] = (balanceMap[itemB] || 0) - 1;

        min = Math.min(min, itemA, itemB);
    }

    let transfer = [];

    for(let cost in balanceMap) {
        const freq = Math.abs(balanceMap[cost]);
        if(freq%2 === 1) return -1;
        transfer.push(...new Array(freq / 2).fill(Number(cost)));
    }

    transfer.sort((a, b) => a - b);
    
    let totalCost = 0;

    for(let i = 0; i < (transfer.length / 2); i++) {
        totalCost += Math.min(transfer[i], min * 2);
    }

    return totalCost;
};

runTest(minCost);