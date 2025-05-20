export default function toArray(linkedList) {
    const newArray = [];
    
    let currentNode = linkedList.head;

    while(currentNode) {
        newArray.push(currentNode.data);
        currentNode = currentNode.next;
    }

    return newArray;
}