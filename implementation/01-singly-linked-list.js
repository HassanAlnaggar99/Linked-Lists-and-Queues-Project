// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val, next) {
        this.value = val;
        this.next = next || null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let node = new SinglyLinkedNode(val, this.head);
        this.head = node;

        this.length++;
        return this;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Time Complexity: O(n), Space Complexity: O(1)
    }

    removeFromHead() {
        if (!this.head) {
            return;
        }

        const removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    removeFromTail() {
        if (!this.head) {
            return;
        }

        let removed;
        if (!this.head.next) {
            removed =  this.head;
            this.head = null;
        } else {
            let curr = this.head;
            while (curr.next.next !== null) {
                curr = curr.next;
            }
            removed = curr.next;
            curr.next = null;
        }

        this.length--;
        return removed;

        // Time Complexity: O(n), Space Complexity: O(1)
    }

    peekAtHead() {
        if (!this.head) {
            return undefined;
        }
        return this.head.value;

        // Time Complexity: O(1), Space Complexity: O(1)
    }

    print() {
        if (!this.head) {
            return;
        }
        let curr = this.head;
        while (curr !== null) {
            console.log(curr.value);
            curr = curr.next;
        }
        // console.log("NULL");

        // Time Complexity: O(n), Space Complexity: O(1)
    }
}

let linkedList = new SinglyLinkedList();

// linkedList.addToTail('A');
// linkedList.addToTail('B');
// linkedList.addToTail('C');
// console.log(linkedList.head.next.next); // .to.eql({ value: 'C', next: null });
// linkedList.removeFromTail();
// console.log(linkedList.head.next.next); // .to.eql(null);

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
