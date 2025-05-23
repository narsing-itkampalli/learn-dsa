export default function mergeSort(arr) {
    if(arr.length < 2) return arr;
    const midIndex = Math.floor(arr.length / 2);

    const left = arr.slice(0, midIndex);
    const right = arr.slice(midIndex, arr.length);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(...left.slice(leftIndex)).concat(...right.slice(rightIndex));
}