export default function deleteNode(linkedList, predicate) {
    let currentNode = linkedList.head;
    let deleted = false;

    if(currentNode !== null && predicate(currentNode)) {
        linkedList.head = currentNode.next;
        deleted = true;
    }

    if(!deleted) {
        while(currentNode) {

            if(currentNode.next !== null && predicate(currentNode.next)) {
                currentNode.next = currentNode.next.next;
                deleted = true;
                break;
            }
    
            currentNode = currentNode.next;
        }
    }

    return deleted;
}