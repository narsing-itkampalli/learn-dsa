import testcases from "./testcases.js";

var maxDistance = function(s, k) {
    let ans = 0;

    const horDirs = ['E', 'W'];
    const verDirs = ['N', 'S'];

    for (const hor of horDirs) {
        for (const ver of verDirs) {
            let remainingK = k;
            let netX = 0, netY = 0;

            for (let i = 0; i < s.length; i++) {
                let ch = s[i];

                if ((ch === hor || ch === ver) && remainingK > 0) {
                    if (ch === 'W') ch = 'E';
                    else if (ch === 'E') ch = 'W';
                    else if (ch === 'N') ch = 'S';
                    else if (ch === 'S') ch = 'N';
                    remainingK--;
                }

                if (ch === 'E') netX += 1;
                else if (ch === 'W') netX -= 1;
                else if (ch === 'N') netY += 1;
                else if (ch === 'S') netY -= 1;

                ans = Math.max(ans, Math.abs(netX) + Math.abs(netY));
            }
        }
    }

    return ans;
};

testcases.forEach(testcase => {
    console.log(maxDistance(...testcase));
});