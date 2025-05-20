export default function insertNode(linkedList, data, insertPosition = null) {
    const newNode = linkedList.createNode(data);

    if(linkedList.head === null) return linkedList.head = newNode;

    if(insertPosition === 0) {
        newNode.next = linkedList.head;
        linkedList.head = newNode;
    }else {
        let currentNode = linkedList.head;
        let currentIndex = 0;

        while(currentNode) {
            if(insertPosition === null && currentNode.next === null) {
                currentNode.next = newNode;
                break;
            }else if(insertPosition !== null && (currentIndex + 1) === insertPosition) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                break;
            }
    
            currentNode = currentNode.next;
            currentIndex++;
        }
    }

    return newNode;
}