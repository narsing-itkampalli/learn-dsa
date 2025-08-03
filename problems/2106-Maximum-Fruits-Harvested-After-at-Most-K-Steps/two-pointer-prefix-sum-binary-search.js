import { runTest } from "../index.js";

/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    const n = fruits.length;

    const left = [];
    let i = 0;
    while (i < n && fruits[i][0] <= startPos) {
        left.push([startPos - fruits[i][0], fruits[i][1]]);
        i++;
    }
    left.reverse();

    const right = [];
    while (i < n) {
        right.push([fruits[i][0] - startPos, fruits[i][1]]);
        i++;
    }

    const psum_left = new Array(left.length + 1).fill(0);
    const psum_right = new Array(right.length + 1).fill(0);

    for (let j = 0; j < left.length; j++) {
        psum_left[j + 1] = psum_left[j] + left[j][1];
    }

    for (let j = 0; j < right.length; j++) {
        psum_right[j + 1] = psum_right[j] + right[j][1];
    }

    function count_le(A, steps) {
        let low = 0, high = A.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (A[mid][0] <= steps) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    let max_collection = 0;
    for (i = 0; i <= k; i++) {
        let ub_left = count_le(left, i);
        let ub_right = count_le(right, k - 2 * i);
        max_collection = Math.max(
            max_collection,
            psum_left[ub_left] + psum_right[ub_right]
        );

        ub_right = count_le(right, i);
        ub_left = count_le(left, k - 2 * i);
        max_collection = Math.max(
            max_collection,
            psum_left[ub_left] + psum_right[ub_right]
        );
    }

    return max_collection;
};

runTest(maxTotalFruits);