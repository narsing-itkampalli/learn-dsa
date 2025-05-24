function radixSort(array) {
    const radixArray = new Array(10).fill().map(() => []);

    const maxValue = Math.max(...array);
    let exp = 1;

    while(Math.floor(maxValue/exp)) {

        while(array.length) {
            const value = array.shift();
            const radixIndex = Math.floor(value/exp) % 10;
            radixArray[radixIndex].push(value);
        }

        radixArray.forEach(bucket => {
            while(bucket.length) {
                array.push(bucket.shift());
            }
        });

        exp *= 10;
    }

    return array;
}


console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
console.log(radixSort([64, 34, 25, 12, 22, 11, 90, 5]));
console.log(radixSort([7, 12, 9, 11, 3]));