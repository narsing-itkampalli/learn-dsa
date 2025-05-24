function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;

        for (let j = 0; j < (arr.length - i) - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90, 5]));
console.log(bubbleSort([7, 12, 9, 11, 3]));