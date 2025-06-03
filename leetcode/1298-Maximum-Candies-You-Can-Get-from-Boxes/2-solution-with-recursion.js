import testcases from  './testcases.js';

/**
 * Recursive approach using `collectBoxes` and `collectKeys` functions.
 * 
 * Time Complexity:
 *   - Worst case: O(n^2)  
 *     - Each of the n boxes may contain up to n keys or boxes, and the recursion may revisit many of them.
 * 
 * Space Complexity:
 *   - O(n) for visitedBoxes, collectedKeys, collectedBoxes arrays.
 *   - O(n) for recursion stack in worst case.
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    const n = status.length;
    let total = 0;
    const collectedBoxes = new Array(n).fill(false);
    const collectedKeys = new Array(n).fill(false);
    const visitedBoxes = new Array(n).fill(false);

    function collectBoxes(boxes) {
        boxes.forEach(box => {
            if(collectedBoxes[box]) return;
            collectedBoxes[box] = true;
            if ((status[box] === 1 || collectedKeys[box]) && !visitedBoxes[box]) {
                visitedBoxes[box] = true;
                collectKeys(keys[box]);
                collectBoxes(containedBoxes[box]);
                total += candies[box];
            }
        });
    }

    function collectKeys(_keys) {
        _keys.forEach(key => {
            collectedKeys[key] = true;
            if(collectedBoxes[key] && !visitedBoxes[key]) {
                visitedBoxes[key] = true;
                collectKeys(keys[key]);
                collectBoxes(containedBoxes[key]);
                total += candies[key];
            }
        });
    }

    collectBoxes(initialBoxes);

    return total;
};

testcases.forEach(testcase => {
    console.log(maxCandies(...testcase));
})