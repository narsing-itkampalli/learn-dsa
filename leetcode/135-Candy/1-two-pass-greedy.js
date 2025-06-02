// Time Complexity - O(n)
// Space Complexity - O(n)

var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1); // O(n)

    for(let i = 1; i < n; i++) { // O(n)
        if(ratings[i] > ratings[i-1]) {
            candies[i] = candies[i-1] + 1;
        }
    }

    for(let i = n - 2; i >= 0; i--) { // O(n)
        if(ratings[i] > ratings[i+1]) {
            candies[i] = Math.max(candies[i], candies[i+1] + 1);
        }
    }

    return candies.reduce((prev, curr) => prev + curr, 0);
};

console.log(candy([1, 2, 2]));
console.log(candy([1, 3, 2, 1]));