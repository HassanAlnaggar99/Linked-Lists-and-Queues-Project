// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val, next, prev) {
        this.value = val;
        this.next = next || null;
        this.prev = prev || null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    removeFromHead() {
        if (this.head === null) {
            return undefined;
        }

        let removed = this.head;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removed.value;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    removeFromTail() {
        if (this.tail === null) {
            return undefined;
        }

        let removed = this.tail;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removed.value;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    peekAtHead() {
        if (!this.head) {
            return undefined;
        } else {
            return this.head.value;
        }

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    peekAtTail() {
        if (!this.head) {
            return undefined;
        } else {
            return this.tail.value;
        }

        // Time Complexity: O(1), Space Complexity: O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
