// Runtime - 99ms
// Space complexity - O(1)
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
    const m = trainers.length;
    let i = 0;
    let j = 0;

    while(i < n && j < m) {
        if(players[i] <= trainers[j]) i++

        j++;
    }

    return i;
};

console.log(matchPlayersAndTrainers([4,7,8], [8,5,8]));