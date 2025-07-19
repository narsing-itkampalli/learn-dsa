var maxFreeTime = function (eventTime, k, startTime, endTime) {
    let n = startTime.length,
        res = 0,
        t = 0;
    for (let i = 0; i < n; i++) {
        t += endTime[i] - startTime[i];
        let left = i <= k - 1 ? 0 : endTime[i - k];
        let right = i === n - 1 ? eventTime : startTime[i + 1];
        res = Math.max(res, right - left - t);
        if (i >= k - 1) {
            t -= endTime[i - k + 1] - startTime[i - k + 1];
        }
    }
    return res;
};

let time = new Date().getTime();

console.log(maxFreeTime(8, 1, [1,3], [2, 5]));
console.log(maxFreeTime(21, 1, [7,10,16], [10,14,18]));
console.log(maxFreeTime(10, 1, [0,2,9], [1,4,10]));
console.log(maxFreeTime(5, 1, [0,1,2,3,4], [1,2,3,4,5]));

console.log({time: `${new Date().getTime() - time}ms`})