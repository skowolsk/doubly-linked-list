const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        var list = new Node(data);
        if (this.head) {
            this.tail.next = list;
            list.prev = this.tail;
            this.tail = list;
        } else {
            this.head = list;
            this.tail = list;
        }
        this.length++;
        return this;
    }

    head() {
        return this.head.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        if (!(index < 0 || index >= this.length || this.length === 0)) {
            for (let i = 0; i < index; i++) {
                this.head = this.head.next;
            }
            return this.head.data;
        }
    }

    insertAt(index, data) {
        let list = new Node(data);
            if (this.isEmpty()) {
                this._head = list;
                this._tail = list;
            }
            else if (index === this.length) {
                this.append(data);
            } else {
                for (let i = 0; i < index-1; i++){
                    this.head = this.head.next;
                }
                list.prev = this.head.prev;
                list.next = this.head;
                this.head.prev.next = list;
                this.head.prev = list;
            }
            this.length++;
            return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        return this;
    }

    deleteAt(index) {
        if (this.length === 1) {
            return this;
        }
        if (index >= 0 && index < this.length) {
            for (let i = 0; i < index; i++) {
                this.head = this.head.next;
            }
        }
        this.head.prev.next = this.head.next;
        this.head.next.prev = this.head.prev;
        this.length--;
        return this;
    }

    reverse() {
        for(let i = 0; i < this.length; i++) {
            let data = this.at(this.length-1);
            this.insertAt(i,data);
            this.deleteAt(this.length);
        }
        return this;
    }

    indexOf(data) {
        let i = 0;
        while (this.head) {
            if (this.head.data !== data) {
                this.head = this.head.next;
                ++i;
            } else {
                return i;
            }
        }
        return null;
    }
}

module.exports = LinkedList;
