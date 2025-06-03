import testcases from "./testcases.js";

/**
 * Iterative solution using a retry loop and queue.
 * 
 * Time Complexity:
 *   - Worst case: O(n^2)
 *     - In each iteration, all unopened boxes are retried.
 *     - In the worst scenario, each box might be retried multiple times (though only once is processed).
 * 
 * Space Complexity:
 *   - O(n) for the queue, keySet, and opened set.
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    const queue = [...initialBoxes];
    const keySet = new Set();
    const opened = new Set();

    let total = 0;
    let changed = true;

    while(changed) {
        changed = false;
        const pendingBoxes = [];

        while(queue.length) {
            const box = queue.shift();
            if(opened.has(box)) continue;

            if((status[box] === 1 || keySet.has(box))) {
                opened.add(box);
                total += candies[box];
                changed = true;

                for(const innerBox of containedBoxes[box]) queue.push(innerBox);
                for (const key of keys[box]) keySet.add(key);
            }else {
                pendingBoxes.push(box);
            }
        }

        queue.push(...pendingBoxes);
    }

    return total;
};

testcases.forEach(testcase => {
    console.log(maxCandies(...testcase));
})