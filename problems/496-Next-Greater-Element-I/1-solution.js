import { runTest } from "../index.js";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = {};
    const stack = [];

    nums2.reverse();
    nums2.forEach(num => {
        map[num] = getMaxNum(stack, num);
        stackAdd(stack, num);
    });

    return nums1.map(num => map[num] || -1);
};

function stackAdd(stack, value) {
    const n = stack.length;

    for(let i = n-1; i >= 0; i--) {
        if(value > stack[i]) stack.pop();
    }

    stack.push(value);
}

function getMaxNum(stack, target) {
    const n = stack.length;
    
    for(let i = n-1; i >= 0; i--) {
        if(stack[i] > target) return stack[i];
    }

    return -1;
}

runTest(nextGreaterElement);