export default function findNode(linkedList, predicate) {
    let currentNode = linkedList.head;
    let found = null;

    if(currentNode !== null && predicate(currentNode)) {
        found = currentNode;
    }

    if(found === null) {
        while(currentNode) {

            if(currentNode.next !== null && predicate(currentNode.next)) {
                found = currentNode.next;
                break;
            }
    
            currentNode = currentNode.next;
        }
    }

    return found;
}