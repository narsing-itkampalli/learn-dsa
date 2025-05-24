function countingSort(arr) {
    const maxValue = Math.max(...arr);
    
    const count = new Array(maxValue+1).fill(0);

    while(arr.length) {
        count[arr.shift()]++;
    }

    count.forEach((item, index) => {
        while(item) {
            arr.push(index);
            item--;
        }
    });

    return arr;
}

console.log(countingSort([4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]));
console.log(countingSort([64, 34, 25, 12, 22, 11, 90, 5]));
console.log(countingSort([7, 12, 9, 11, 3]));