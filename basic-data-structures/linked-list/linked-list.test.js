import LinkedList from "./linked-list.js";

const linkedList = new LinkedList(15, 18, 26, 48);

linkedList.insertNode(150); // add at end
linkedList.insertNode(451, 3); // add at index

console.log('Before deleted:', linkedList.toArray());
linkedList.deleteNode((node) => node.data === 18);

console.log(linkedList.toArray());


const products = new LinkedList({name: 'apple', price: 150}, {name: 'ball', price: 499});
products.insertNode({name: 'cat', price: 649});
products.insertNode({name: 'dog', price: 29});
products.insertNode({name: 'egg', price: 99});

const searchResult = products.findNode((node) => node.data.name === 'egg');
console.log(searchResult?.data);