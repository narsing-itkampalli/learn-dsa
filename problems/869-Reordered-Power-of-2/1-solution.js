import { runTest } from "../index.js";

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const digits = String(n).split('');

    for (let i = 0; i < 30; i++) {
        const powerDigits = String(2 ** i).split('');

        if (powerDigits.length === digits.length) {
            const remainingDigits = [...digits];

            const matchesAllDigits = powerDigits.every(digit => {
                const index = remainingDigits.indexOf(digit);
                if (index === -1) return false;
                remainingDigits.splice(index, 1);
                return true;
            });

            if (matchesAllDigits) return true;
        }

        if (powerDigits.length > digits.length) break;
    }

    return false;
};

runTest(reorderedPowerOf2);