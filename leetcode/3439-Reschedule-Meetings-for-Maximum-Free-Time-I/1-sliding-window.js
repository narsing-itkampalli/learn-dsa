// Space Complexity - O(n) at worst case
// Time Complexity - O(n)


/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    const freeTimes = startTime.map((start, i) => start - (endTime[i - 1] || 0)); // Space O(n) - at worst case

    if (endTime.at(-1) < eventTime) {
        freeTimes.push(eventTime - endTime.at(-1));
    }

    if(!freeTimes.length) return 0;

    let m = freeTimes.length;
    let i = 0;
    let j = 0;
    let max = 0;
    let size = 0;

    while(i < m && j < m) { // O(n)
        size = (size + freeTimes[j]);
        if(j - i > k) {
            size -= freeTimes[i];
            i++;
        }
        max = Math.max(max, size);
        j++;
    }

    return max;
};

let time = new Date().getTime();

console.log(maxFreeTime(8, 1, [1,3], [2, 5]));
console.log(maxFreeTime(21, 1, [7,10,16], [10,14,18]));
console.log(maxFreeTime(10, 1, [0,2,9], [1,4,10]));
console.log(maxFreeTime(5, 1, [0,1,2,3,4], [1,2,3,4,5]));

console.log({time: `${new Date().getTime() - time}ms`})