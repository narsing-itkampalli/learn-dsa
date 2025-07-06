// T.C : O(n)
// S.C : O(n + m)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.nums2Map = {};

    nums2.forEach(num2 => {
        this.nums2Map[num2] = (this.nums2Map[num2] || 0) + 1;
    });
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const indexVal = this.nums2[index];
    this.nums2Map[indexVal] = (this.nums2Map[indexVal] || 1) - 1;
    this.nums2Map[indexVal + val] = (this.nums2Map[indexVal + val] || 0) + 1;
    this.nums2[index] = indexVal + val;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let count = 0;

    this.nums1.forEach(num1 => {
        count += (this.nums2Map[tot - num1] || 0);
    });

    return count;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

const [nums1, nums2] = [[1,1,2,2,2,3],[1,4,5,2,5,4]];

var obj = new FindSumPairs(nums1, nums2)
console.log(obj.count(7));
obj.add(3,2);
console.log(obj.count(8));
console.log(obj.count(4));