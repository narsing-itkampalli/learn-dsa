import { runTest } from "../index.js";

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const n = fruits.length;
    const used = new Array(n).fill(false);
    let unplacedCount = 0;

    for (let i = 0; i < n; i++) {
        let placed = false;

        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= fruits[i]) {
                used[j] = true;
                placed = true;
                break;
            }
        }

        if (!placed) {
            unplacedCount++;
        }
    }

    return unplacedCount;
};

runTest(numOfUnplacedFruits);