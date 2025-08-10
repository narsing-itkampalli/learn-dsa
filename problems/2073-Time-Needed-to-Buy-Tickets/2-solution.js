import { runTest } from "../index.js";

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const n = tickets.length;
    const targetTickets = tickets[k];
    let res = 0;

    for (let i = 0; i < n; i++) {
        if (i <= k) {
            res += Math.min(tickets[i], targetTickets);
        } else {
            res += Math.min(tickets[i], targetTickets - 1);
        }

        if(i === k && targetTickets === 1) break;
    }

    return res;
};

runTest(timeRequiredToBuy);