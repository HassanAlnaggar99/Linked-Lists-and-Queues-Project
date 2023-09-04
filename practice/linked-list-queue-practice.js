// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        let curr = this.head;
        let count = 0;
        while (curr) {
            count++;
            curr = curr.next;
        }
        return count;
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        if (!this.head) {
            return 0;
        }

        let sum = 0;
        let curr = this.head;
        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum;

        // Time Complexity: O(n), Space Complexity: O(1)
    }

    averageValue() {
        if (!this.head) {
            return 0;
        }

        let sum = 0, length = 0;
        let curr = this.head;
        while (curr) {
            sum += curr.value;
            length++;
            curr = curr.next;
        }
        const avg = sum / length;
        return avg;

        // Time Complexity: O(n), Space Complexity: O(1)
    }

    findNthNode(n) {
        if(!this.head) {
            return null;
        }

        let length = 0;
        let curr = this.head;
        while (curr) {
            if (length === n) {
                return curr;
            }
            length++;
            curr = curr.next;
        }
        return null;
        // Time Complexity: O(n), Space Complexity: O(1)
    }

    findMid() {
        if (!this.head) {
            return null;
        }

        let length = 0;
        let curr = this.head;
        while (curr) {
            length++;
            curr = curr.next;
        }

        let mid = Math.floor((length - 1) / 2), i = 0;
        curr = this.head;
        while(curr) {
            if (i === mid) {
                return curr;
            }
            i++;
            curr = curr.next;
        }

        // Time Complexity: O(n), Space Complexity: O(1)
        // No difference between single and double linked lists
    }

    reverse() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            return this;
        } else {
            let ans = new SinglyLinkedList();

            // loop through the list argument
            let curr = this.head;
            while (curr) {
                // copy the curr node;
                let newNode = new SinglyLinkedNode(curr.value);
                // add the newNode;
                newNode.next = ans.head;
                ans.head = newNode;
                // increase the loop index
                curr = curr.next;
            }
            return ans;
        }

        // Time Complexity: O(n), Space Complexity: O(n)
    }

    reverseInPlace() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            return this;
        } else {
            let prev = null, curr = this.head, next;
            while (curr) {
                next = curr.next;
                curr.next = prev;
                prev = curr;

                curr = next;
            }
            this.head = prev;
        }

        // Time Complexity: O(n), Space Complexity: O(1)
    }

    print() {
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}


// let list = new SinglyLinkedList();

// list.addToTail(1);
// list.addToTail(2);
// list.addToTail(3);
// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(6);

// const reversed = list.reverse();
// reversed.print();

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        if (!this.head) {
            return null;
        }

        let length = 0;
        let curr = this.head;
        while (curr) {
            length++;
            curr = curr.next;
        }

        let mid = Math.floor((length - 1) / 2), i = 0;
        curr = this.head;
        while(curr) {
            if (i === mid) {
                return curr;
            }
            i++;
            curr = curr.next;
        }

        // Time Complexity: O(n), Space Complexity: O(1)
        // No difference between single and double linked lists
    }

    reverse() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            return this;
        } else {
            let ans = new DoublyLinkedList();

            // loop through the list argument
            let curr = this.head;
            while (curr) {
                // copy the curr node;
                let newNode = new DoublyLinkedNode(curr.value);
                // add the newNode;
                newNode.next = ans.head;
                ans.head = newNode;
                // increase the loop index
                curr = curr.next;
            }
            return ans;
        }

        // Time Complexity: O(n), Space Complexity: O(n)
        // No difference between single and double linked lists
    }

    reverseInPlace() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            return this;
        } else {
            let curr = this.head;
            while (curr) {
                let temp = curr.next;
                curr.next = curr.prev;
                curr.prev = temp;

                curr = curr.prev;
            }

            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
        }

        // Time Complexity: O(n), Space Complexity: O(1)
        // In place reverse of doubly linked list
    }
}

// let dll = new DoublyLinkedList();

// dll.addToTail(1);
// dll.addToTail(2);
// dll.addToTail(3);
// dll.addToTail(4);
// dll.addToTail(5);
// dll.addToTail(6);

// dll.reverseInPlace();

// let cur = dll.head;
// for (let i = 6 ; i >= 1 ; i--) {
//   console.log(cur.value); //.to.equal(i);
//   cur = cur.next;
// }

// console.log(cur); // .to.equal(null);


module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
