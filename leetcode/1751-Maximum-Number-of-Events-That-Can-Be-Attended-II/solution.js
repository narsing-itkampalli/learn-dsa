function maxValue(events, k) {
    events.sort((a, b) => a[0] - b[0]);

    const n = events.length;
    const t = Array.from({ length: n + 1 }, () => Array(k + 1).fill(-1));

    function solve(i, kLeft) {
        if (kLeft <= 0 || i >= n) return 0;
        if (t[i][kLeft] !== -1) return t[i][kLeft];

        const [, end, value] = events[i];

        let j = i + 1;
        while (j < n && events[j][0] <= end) {
            j++;
        }

        const take = value + solve(j, kLeft - 1);
        const skip = solve(i + 1, kLeft);

        return (t[i][kLeft] = Math.max(take, skip));
    }

    return solve(0, k);
}

console.log(maxValue([[1,2,4],[3,4,3],[2,3,1]], 2));
console.log(maxValue([[1,2,4],[3,4,3],[2,3,10]], 2));
console.log(maxValue([[1,1,1],[2,2,2],[3,3,3],[4,4,4]], 2));