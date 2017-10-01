const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        let list = new Node(data);
        if(this.length){
            list.prev = this._tail;
            this.tail= list;
            this.tail.next = list;
        }
        else{
            this.tail = list;
            this.head = list;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head){
            return this._head.data;
        }
        return null;
    }

    tail() {
        if (this._tail){
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        if (!(index < 0 && index > this.length && index === 0)) {
            for (let i = 0; i < index; i++) {
                this.head = this.head.next;
            }
            return this.head.data;
        }
    }

    insertAt(index, data) {}

    isEmpty() {
        return !this.head;
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

    reverse() {}

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
