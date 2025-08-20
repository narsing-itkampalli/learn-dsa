import { runTest } from "../index.js";

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;

    let left = 1, right = Math.floor(x / 2), ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sq = mid * mid;

        if (sq === x) {
            return mid;
        } else if (sq < x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};

runTest(mySqrt);