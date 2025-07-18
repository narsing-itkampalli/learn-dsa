import testcases from './testcases.js';

function MinHeap() {
    this.data = [];

    this.push = function (val) {
        this.data.push(val);
        this._bubbleUp(this.data.length - 1);
    };

    this.pop = function () {
        const top = this.data[0];
        const end = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = end;
            this._bubbleDown(0);
        }
        return top;
    };

    this.top = function () {
        return this.data[0];
    };

    this.size = function () {
        return this.data.length;
    };

    this._bubbleUp = function (index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.data[parent] <= this.data[index]) break;
            [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            index = parent;
        }
    };

    this._bubbleDown = function (index) {
        const length = this.data.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.data[left] < this.data[smallest]) smallest = left;
            if (right < length && this.data[right] < this.data[smallest]) smallest = right;

            if (smallest === index) break;
            [this.data[smallest], this.data[index]] = [this.data[index], this.data[smallest]];
            index = smallest;
        }
    };
}

function MaxHeap() {
    this.data = [];

    this.push = function (val) {
        this.data.push(val);
        this._bubbleUp(this.data.length - 1);
    };

    this.pop = function () {
        const top = this.data[0];
        const end = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = end;
            this._bubbleDown(0);
        }
        return top;
    };

    this.top = function () {
        return this.data[0];
    };

    this.size = function () {
        return this.data.length;
    };

    this._bubbleUp = function (index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.data[parent] >= this.data[index]) break;
            [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            index = parent;
        }
    };

    this._bubbleDown = function (index) {
        const length = this.data.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (left < length && this.data[left] > this.data[largest]) largest = left;
            if (right < length && this.data[right] > this.data[largest]) largest = right;

            if (largest === index) break;
            [this.data[largest], this.data[index]] = [this.data[index], this.data[largest]];
            index = largest;
        }
    };
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const n = nums.length;
    const N = Math.floor(n / 3);

    const rightMaxSum = new Array(n).fill(0);
    const minHeap = new MinHeap();
    let rightSum = 0;

    for (let i = n - 1; i >= N; --i) {
        minHeap.push(nums[i]);
        rightSum += nums[i];

        if (minHeap.size() > N) {
            rightSum -= minHeap.pop();
        }

        if (minHeap.size() === N) {
            rightMaxSum[i] = rightSum;
        }
    }

    const maxHeap = new MaxHeap();
    let leftSum = 0;
    let minDiff = Infinity;

    for (let i = 0; i < 2 * N; ++i) {
        maxHeap.push(nums[i]);
        leftSum += nums[i];

        if (maxHeap.size() > N) {
            leftSum -= maxHeap.pop();
        }

        if (maxHeap.size() === N) {
            minDiff = Math.min(minDiff, leftSum - rightMaxSum[i + 1]);
        }
    }

    return minDiff;
}


let time = new Date().getTime();
testcases.forEach(testcase => {
    console.log(minimumDifference(testcase));
});

console.log({time: `${new Date().getTime() - time}ms`});