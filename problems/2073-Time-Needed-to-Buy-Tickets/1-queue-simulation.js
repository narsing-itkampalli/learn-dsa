import { runTest } from "../index.js";

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = 0;

    while(true) {
        const pendingTickets = tickets.shift() - 1;
        res++;

        if(pendingTickets > 0) tickets.push(pendingTickets);
        if(pendingTickets === 0 && k === 0) break;
        if(k > 0) k--;
        else k = tickets.length - 1;
    }

    return res;
};

runTest(timeRequiredToBuy);