// Runtime - 2658ms
// Space complexity - O(1);
// Time complexity - O(n log n)

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    let res = 0;

    players.forEach(player => {
        const trainer = lowerBound(trainers, player);

        if(trainer >= 0) {
            trainers.splice(trainer, 1);
            res++;
        }
    });

    return res;
};

function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] >= target) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

console.log(matchPlayersAndTrainers([4,7,8], [8,5,8]));