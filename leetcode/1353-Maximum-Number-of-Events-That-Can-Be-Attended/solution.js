import testcases from './testcases.js';

var maxEvents = function (events) {
    events.sort((a, b) => a[0] - b[0]);

    const n = events.length;
    const minHeap = [];
    let count = 0;
    let i = 0;
    let day = events[0][0];

    while (i < n || minHeap.length) {
        if (!minHeap.length && i < n) {
            day = events[i][0];
        }

        while (i < n && day === events[i][0]) {
            insertSorted(minHeap, events[i][1]);
            i++;
        }

        if (minHeap.length) {
            count++;
            minHeap.pop();
        }

        day++;

        while (minHeap.length && day > minHeap.at(-1)) {
            minHeap.pop();
        }
    }

    return count;
};

const insertSorted = (arr, val) => {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > val) left = mid + 1;
        else right = mid;
    }
    arr.splice(left, 0, val);
};

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(maxEvents(testcase));
});

console.log({time: `${new Date().getTime() - time}ms`});