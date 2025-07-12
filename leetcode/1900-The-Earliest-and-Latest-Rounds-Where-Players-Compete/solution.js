var earliestAndLatest = function(n, firstPlayer, secondPlayer) {
    const memo = new Map();

    function dfs(players, round) {
        const key = players.join(',');
        if (memo.has(key)) return memo.get(key);

        let res = [Infinity, -Infinity];
        const len = players.length;

        for (let i = 0; i < len / 2; i++) {
            const a = players[i];
            const b = players[len - 1 - i];

            if ((a === firstPlayer && b === secondPlayer) || (a === secondPlayer && b === firstPlayer)) {
                return [round, round];
            }
        }

        const options = generateNextRounds(players, firstPlayer, secondPlayer);

        for (const next of options) {
            const [early, late] = dfs(next, round + 1);
            res[0] = Math.min(res[0], early);
            res[1] = Math.max(res[1], late);
        }

        memo.set(key, res);
        return res;
    }

    function generateNextRounds(players, fp, sp) {
        const res = [];

        function backtrack(i, cur) {
            const len = players.length;
            if (i >= Math.floor(len / 2)) {
                // Odd count: include middle player
                if (len % 2 === 1) cur.push(players[Math.floor(len / 2)]);
                const sorted = [...cur].sort((a, b) => a - b);
                res.push(sorted);
                if (len % 2 === 1) cur.pop();
                return;
            }

            const a = players[i];
            const b = players[len - 1 - i];

            if ((a === fp && b === sp) || (a === sp && b === fp)) {
                return;
            }

            // First or second player always win if they play
            if (a === fp || a === sp) {
                cur.push(a);
                backtrack(i + 1, cur);
                cur.pop();
            } else if (b === fp || b === sp) {
                cur.push(b);
                backtrack(i + 1, cur);
                cur.pop();
            } else {
                // Try both win scenarios
                cur.push(a);
                backtrack(i + 1, cur);
                cur.pop();

                cur.push(b);
                backtrack(i + 1, cur);
                cur.pop();
            }
        }

        backtrack(0, []);
        return res;
    }

    const players = [];
    for (let i = 1; i <= n; i++) players.push(i);

    return dfs(players, 1);
}

console.log(earliestAndLatest(11, 2, 4));
console.log(earliestAndLatest(5, 1, 5));