// Time Complexity - O(n)
// Space Complexity - O(n)
function maxFreeTime(eventTime, startTime, endTime) {
    const freeArray = [];

    freeArray.push(startTime[0]);

    for (let i = 1; i < startTime.length; i++) {
        freeArray.push(startTime[i] - endTime[i - 1]);
    }

    freeArray.push(eventTime - endTime[endTime.length - 1]);

    const n = freeArray.length;
    const maxRightFree = new Array(n).fill(0);
    const maxLeftFree = new Array(n).fill(0);

    for (let i = n - 2; i >= 0; i--) {
        maxRightFree[i] = Math.max(maxRightFree[i + 1], freeArray[i + 1]);
    }

    for (let i = 1; i < n; i++) {
        maxLeftFree[i] = Math.max(maxLeftFree[i - 1], freeArray[i - 1]);
    }

    let result = 0;

    for (let i = 1; i < n; i++) {
        const currEventTime = endTime[i - 1] - startTime[i - 1];

        if (currEventTime <= Math.max(maxLeftFree[i - 1], maxRightFree[i])) {
            result = Math.max(result, freeArray[i - 1] + currEventTime + freeArray[i]);
        }

        result = Math.max(result, freeArray[i - 1] + freeArray[i]);
    }

    return result;
}


console.log(maxFreeTime(5, [1,3], [2,5]));
console.log(maxFreeTime(5, [0,7,9], [1,8,10]));