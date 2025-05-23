function logN(n) {
    while(n > 1) {
        n = Math.floor(n/2);
    }
}

function binarySearch(arr, start, end, target, count) {
    if(start > end) return false;

    const midIndex = Math.floor((start + end) / 2);
    const midValue = arr[midIndex];

    if(midValue == target) return true;
    if(midValue > target) return binarySearch(arr, start, midIndex - 1, target);
    else return binarySearch(arr, midIndex + 1, end, target);
}

const data = [15, 16, 23, 28, 37, 56, 100, 110, 120, 121];

console.log(binarySearch(data, 0, data.length - 1, 130))