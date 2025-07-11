import testcases from './testcases.js';

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]); // Time - O(n log n)

    const freq = new Array(n).fill(0);
    const freeRooms = [];
    const occupiedRooms = [];

    for(let i = n-1; i >= 0; i--) {
        freeRooms.push(i);
    }

    for(let meeting of meetings) { // O(n)
        const [start, end] = meeting;

        while(occupiedRooms.length && occupiedRooms.at(-1)[0] <= start) {
            const room = occupiedRooms.pop()[1];
            insertSorted(freeRooms, (val) => val > room, room);
        }

        if(freeRooms.length) {
            const room = freeRooms.pop();
            const compareValue = (val) => {
                const [endMid, roomMid] = val;
                return endMid > end || (endMid === end && roomMid > room);
            };
            insertSorted(occupiedRooms, compareValue, [end, room]);
            freq[room] += 1;
        }else {
            const [time, room] = occupiedRooms.pop();
            const nextEnd = time + (end - start);
            const compareValue = (val) => {
                const [endMid, roomMid] = val;
                return endMid > nextEnd || (endMid === nextEnd && roomMid > room);
            };
            insertSorted(occupiedRooms, compareValue, [nextEnd, room]);
            freq[room] += 1;
        }
    }

    return maxValIndex(freq); // O(n)
};

const maxValIndex = (arr) => {
    let max = 0;

    arr.forEach((item, index) => {
        if(item > arr[max]) {
            max = index;
        }
    });

    return max;
}

const insertSorted = (arr, compareValue, insertValue = null) => {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (compareValue(arr[mid])) left = mid + 1;
        else right = mid;
    }
    arr.splice(left, 0, insertValue);
};

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(mostBooked(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`});