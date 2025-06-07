// Time: O(n log n), Space: O(n)

class SortedArray {
    constructor() {
        this.data = [];
    }

    insert(value, index) {
        const insertIndex = this.findInsertIndex(value);
        this.data.splice(insertIndex, 0, {value, index});
    }

    findInsertIndex(value) {
        let left = 0;
        let right = this.data.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (this.data[mid].value < value) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}

var clearStars = function(s) {
    const sortedArray = new SortedArray();
    s = s.split('');
    const n = s.length;

    for(let i = 0; i < n; i++) {
        if(s[i] == '*') {
            s[sortedArray.data.pop().index] = '*';
        }else {
            sortedArray.insert(s[i], i);
        }
    }

    return s.filter(char => char !== '*').join('');
};

console.log(clearStars("aaba*"))
console.log(clearStars("abc"))