export default class HashMap {

    constructor(size = 100) {
        this.size = size;
        this.buckets = new Array(size).fill().map(() => []);
    }

    hash_function(key) {
        return (
            key.split('')
            .map((keyItem) => Number(keyItem))
            .filter((keyItem) => Number.isInteger(Number(keyItem)))
            .reduce((total, currentNumber) => total + currentNumber, 0)
        ) % this.size;
    }

    put(key, value) {
        const bucketIndex = this.hash_function(key);
        const entryIndex = this.buckets[bucketIndex].findIndex((entry) => entry[0] === key);

        if(entryIndex > -1) {
            this.buckets[bucketIndex][entryIndex][1] = value;
        }else {
            this.buckets[bucketIndex].push([key, value]);
        }
    }

    remove(key) {
        const bucketIndex = this.hash_function(key);
        const bucket = this.buckets[bucketIndex];
        const entryIndex = bucket.findIndex((entry) => entry[0] === key);

        if(entryIndex > -1) {
            return bucket.splice(entryIndex, 1).length > 0;
        }

        return false;
    }

    contains(key) {
        const bucketIndex = this.hash_function(key);
        const bucket = this.buckets[bucketIndex];
        const entryIndex = bucket.findIndex((entry) => entry[0] === key);

        return entryIndex > -1;
    }

    print() {
        const printable = (
            this.buckets.map((bucket, bucketIndex) => [bucketIndex, bucket])
            .filter(enumberatedBucket => enumberatedBucket[1].length > 0)
        );

        console.log(Object.fromEntries(printable));
    }

    toArray() {
        return (
            this.buckets
            .filter(bucket => bucket.length > 0)
            .map(bucket => bucket.map(bucketEntry => bucketEntry[1]))
            .flat(1)
        );
    }
}