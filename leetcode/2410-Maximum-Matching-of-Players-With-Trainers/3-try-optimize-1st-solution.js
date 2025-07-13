// Runtime - 2643ms
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

    const n = players.length;
    let i = 0;

    while(i < n) {
        const trainer = lowerBound(trainers, players[i]);
        if(trainer >= 0) {
            i++;
            trainers.splice(trainer, 1);
        }
        else break;
    }

    return i;
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