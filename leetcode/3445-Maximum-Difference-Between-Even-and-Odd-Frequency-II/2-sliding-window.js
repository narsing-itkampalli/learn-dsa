import testcases from "./testcases.js";

function maxDifference(s, k) {
    const n = s.length;
    let maxDiff = -Infinity;

    function getState(countA, countB) {
        const parityA = countA % 2;
        const parityB = countB % 2;

        if (parityA === 0 && parityB === 0) return 0;
        if (parityA === 0 && parityB === 1) return 1;
        if (parityA === 1 && parityB === 0) return 2;
        return 3;
    }

    for (let a = 0; a <= 4; a++) {
        for (let b = 0; b <= 4; b++) {
            if (a === b) continue;

            const stateMinPrev = new Array(4).fill(Infinity);
            let countA = 0, countB = 0;
            let prevA = 0, prevB = 0;

            let l = -1;
            let r = 0;

            while (r < n) {
                if (parseInt(s[r]) === a) countA++;
                if (parseInt(s[r]) === b) countB++;

                while ((r - l) >= k && (countB - prevB) >= 2 && (countA - prevA) >= 1) {
                    const leftState = getState(prevA, prevB);
                    stateMinPrev[leftState] = Math.min(stateMinPrev[leftState], prevA - prevB);

                    l++;
                    if (parseInt(s[l]) === a) prevA++;
                    if (parseInt(s[l]) === b) prevB++;
                }

                const rightState = getState(countA, countB);
                const bestLeftState = rightState ^ 2;
                const bestMinDiff = stateMinPrev[bestLeftState];

                if (bestMinDiff !== Infinity) {
                    const currDiff = (countA - countB) - bestMinDiff;
                    maxDiff = Math.max(maxDiff, currDiff);
                }

                r++;
            }
        }
    }

    return maxDiff;
}

let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(maxDifference(...testcase));
});

console.log({time: `${new Date().getTime() - time}ms`})