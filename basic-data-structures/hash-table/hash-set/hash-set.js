export default class HashSet {

    constructor(size = 100) {
        this.buckets = new Array(size).fill().map(() => []);
        this.size = size;
    }

    hash_function(value) {
        return value.split('').reduce((total, value) => {return total + value.charCodeAt(0)}, 0) % this.size;
    }

    add(value) {
        const bucketIndex = this.hash_function(value);
        !this.buckets[bucketIndex].includes(value) && this.buckets[bucketIndex].push(value);
    }

    remove(value) {
        const bucketIndex = this.hash_function(value);
        const valueIndex = this.buckets[bucketIndex].indexOf(value);
        if(valueIndex >= 0) {
            this.buckets[bucketIndex].splice(valueIndex, 1);
            return true;
        }

        return false;
    }

    contains(value) {
        const bucketIndex = this.hash_function(value);
        return this.buckets[bucketIndex].includes(value)
    }

    print() {
        const printableObject = (
            this.buckets
                .map((bucket, index) => ([index, bucket]))
                .filter(([_, bucket]) => bucket.length > 0)
        );
        console.log(Object.fromEntries(printableObject));
    }
}