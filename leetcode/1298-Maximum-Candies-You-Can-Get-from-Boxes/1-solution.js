import testcases from  './testcases.js';

// ❌ This solution doesn't handle all test cases correctly.  
// It was my first attempt and was written before fully understanding the problem requirements.
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let total = 0;
    const boxesToBeOpened = [];

    checkBoxes(initialBoxes);

    function checkBoxes(boxes) {
        boxes.forEach(box => {
            if(status[box] === 1) open(box);
            else boxesToBeOpened.push(box);
        });
    }

    function unlock(keys) {
        keys.forEach(key => {
            status[key] = 1;
            if(boxesToBeOpened.includes(key)) open(key);
        })
    }

    function open(index) {
        total += candies[index];
        checkBoxes(containedBoxes[index]);
        unlock(keys[index]);
    }

    return total;
};

testcases.forEach(testcase => {
    console.log(maxCandies(...testcase));
})