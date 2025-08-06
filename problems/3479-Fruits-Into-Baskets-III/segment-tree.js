import { runTest } from "../index.js";

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const n = fruits.length;
    const segTree = new Array(4 * n + 1).fill(0);

    function buildSegTreeRMQ(baskets, low, high, st_idx) {
        if (low === high) {
            segTree[st_idx] = baskets[low];
            return;
        }

        const mid = Math.floor(low + (high - low) / 2);
        buildSegTreeRMQ(baskets, low, mid, 2 * st_idx);
        buildSegTreeRMQ(baskets, mid + 1, high, 2 * st_idx + 1);
        segTree[st_idx] = Math.max(segTree[2 * st_idx], segTree[2 * st_idx + 1]);
    }

    function findLeftmostBasket(fruit, low, high, st_idx) {
        if (segTree[st_idx] < fruit) {
            return -1;
        }

        if (low === high) {
            segTree[st_idx] = -1;
            return 1;
        }

        const mid = Math.floor(low + (high - low) / 2);
        let val;
        if (segTree[2 * st_idx] >= fruit) {
            val = findLeftmostBasket(fruit, low, mid, 2 * st_idx);
        } else {
            val = findLeftmostBasket(fruit, mid + 1, high, 2 * st_idx + 1);
        }

        segTree[st_idx] = Math.max(segTree[2 * st_idx], segTree[2 * st_idx + 1]);
        return val;
    }

    buildSegTreeRMQ(baskets, 0, n - 1, 1);

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (findLeftmostBasket(fruits[i], 0, n - 1, 1) === -1) {
            count++;
        }
    }

    return count;
};

runTest(numOfUnplacedFruits);