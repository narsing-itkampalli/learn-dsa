import { runTest } from "../index.js";

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    const n = fruits.length;
    const map = new Map();

    let i = 0;
    let j = 0;
    let count = 0;

    while (j < n) {
        const fruit = fruits[j];
        map.set(fruit, (map.get(fruit) || 0) + 1);

        if (map.size <= 2) {
            count = Math.max(count, j - i + 1);
        } else {
            const leftFruit = fruits[i];
            map.set(leftFruit, map.get(leftFruit) - 1);
            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            }
            i++;
        }

        j++;
    }

    return count;
};

runTest(totalFruit);