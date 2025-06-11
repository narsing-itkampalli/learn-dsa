import testcases from "./testcases.js";

var maxDifference = function(s, k) {
    let maxDiff = -1;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        let freq = new Array(5).fill(0);

        for (let j = i; j < n; j++) {
            freq[parseInt(s[j])]++;

            if (j - i + 1 >= k) {
                let a1 = -n;
                let a2 = n;

                for (let d = 0; d < 5; d++) {
                    if (freq[d] > 0) {
                        if (freq[d] % 2 !== 0) {
                            if(freq[d] > a1) a1 = freq[d];
                        } else if(freq[d] < a2) a2 = freq[d];
                    }
                }

                maxDiff = Math.max(maxDiff, a1 - a2);
            }
        }
    }
    return maxDiff;
};

testcases.forEach(testcase => {
    console.log(maxDifference(...testcase));
});