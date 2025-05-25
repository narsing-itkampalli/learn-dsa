function partition(array, start, end) {
    const pivot = array[end];
    let smallerElementIndex = start - 1;

    for (let current = start; current < end; current++) {
        if (array[current] <= pivot) {
            smallerElementIndex++;
            [array[smallerElementIndex], array[current]] = [array[current], array[smallerElementIndex]];
        }
    }

    [array[smallerElementIndex + 1], array[end]] = [array[end], array[smallerElementIndex + 1]];
    return smallerElementIndex + 1;
}

function quickSort(array, start = 0, end = array.length - 1) {
    if (start >= end) return;

    const pivotIndex = partition(array, start, end);

    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);

    return array;
}

console.log(quickSort([64, 34, 25, 12, 12, 12, 22, 12, 11, 90, 5]));