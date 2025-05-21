import HashSet from "./hash-set.js";

const hashSet = new HashSet();

hashSet.add("narsing");
hashSet.add('Narsing');
hashSet.add("narsingitkampalli@gmail.com");
hashSet.add("test@gmail.com");
hashSet.add("fasttest@gmail.com");
hashSet.add("test164565@gmail.com");
hashSet.add("anothertest@gmail.com");

console.log("Contains: ", hashSet.contains('narsing'))
console.log("Removed: ", hashSet.remove('narsing'))
console.log("Contains: ", hashSet.contains('narsing'))

hashSet.print();