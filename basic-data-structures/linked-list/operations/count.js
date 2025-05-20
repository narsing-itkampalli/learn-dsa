export default function count(linkedList) {
    let count = 0;

    let currentNode = linkedList.head;

    while(currentNode) {
        count++;
        currentNode = currentNode.next;
    }

    return count;
}