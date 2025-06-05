
/**
 * Time Complexity: O(N + M), where N is length of s1/s2 and M is length of baseStr.
 *   - Each node (character) is visited once per DFS due to memoization by Set.
 * Space Complexity: O(N + 26), for graph storage and visited Set (26 letters max).
 *
 * Solves the problem using DFS to find lexicographically smallest equivalent character.
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const adj = new Map();

    // Step 1: Build the graph
    for (let i = 0; i < s1.length; i++) {
        const a = s1[i];
        const b = s2[i];

        if (!adj.has(a)) adj.set(a, []);
        if (!adj.has(b)) adj.set(b, []);

        adj.get(a).push(b);
        adj.get(b).push(a);
    }

    function dfs(ch, visited) {
        visited.add(ch);
        let minCh = ch;

        for (const neighbor of adj.get(ch) || []) {
            if (!visited.has(neighbor)) {
                const candidate = dfs(neighbor, visited);
                if (candidate < minCh) {
                    minCh = candidate;
                }
            }
        }

        return minCh;
    }

    const result = [];

    for (const ch of baseStr) {
        const visited = new Set();
        result.push(dfs(ch, visited));
    }

    return result.join('');
}