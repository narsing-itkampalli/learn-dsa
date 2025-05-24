function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}


console.log(selectionSort([64, 34, 25, 12, 22, 11, 90, 5]));
console.log(selectionSort([7, 12, 9, 11, 3]));