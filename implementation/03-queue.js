const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // addToTail()
        let newNode = new SinglyLinkedNode(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    dequeue() {
        // removeFromHead()
        if (!this.head) {
            return null;
        }
        let removed = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return removed.value;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
