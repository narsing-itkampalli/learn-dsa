function partition(array, start, end) {
    const pivot = array[end];
    let smallerElementIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            [array[smallerElementIndex], array[i]] = [array[i], array[smallerElementIndex]];
            smallerElementIndex++;
        }
    }

    [array[smallerElementIndex], array[end]] = [array[end], array[smallerElementIndex]];
    return smallerElementIndex;
}

function quickSort(array, start = 0, end = array.length - 1) {
    if (start >= end) return;

    const pivotIndex = partition(array, start, end);

    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);

    return array;
}

console.log(quickSort([64, 34, 25, 12, 12, 12, 22, 12, 11, 90, 5]));