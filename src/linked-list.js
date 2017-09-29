const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail= null;
        this.length = 0;

    }

    append(data) {
        const node = new Node(data);

        if(this.length){
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.tail = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    head() {
    }

    tail() {
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        return !this.length;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
