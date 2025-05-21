import HashMap from "./hash-map.js";

const hashMap = new HashMap();

hashMap.put('123-4567', "Narsing Itkampalli");
hashMap.put('123-4568', "Narsing");
hashMap.put('123-4577', "Apple");

console.log(hashMap.toArray());

console.log("Contains:", hashMap.contains('123-4577'));
console.log("Removed:", hashMap.remove('123-4577'));
console.log("Contains:", hashMap.contains('123-4577'));

hashMap.print()