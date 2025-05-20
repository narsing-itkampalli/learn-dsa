import insertNode from "./operations/insert-node.js";
import deleteNode from "./operations/delete-node.js";
import toArray from "./operations/to-array.js";
import findNode from "./operations/find-node.js";
import count from "./operations/count.js";
import LinkedListNode from "./linked-list-node.js";

export default class LinkedList {
    head = null;

    constructor(...nodes) {
        this.insertNode = insertNode.bind(insertNode, this);
        this.deleteNode = deleteNode.bind(deleteNode, this);
        this.toArray = toArray.bind(toArray, this);
        this.findNode = findNode.bind(findNode, this);
        this.count = count.bind(count, this);

        if(nodes.length) {
            nodes.forEach((node) => {
                this.insertNode(node);
            });
        }
    }

    createNode(data, next = null) {
        return new LinkedListNode(data, next);
    }
}