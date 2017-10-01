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
            list.prev = this.tail;
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
        return this.head.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        if (!(index < 0 && index > this.length && index === 0)) {
            for (let i = 0; i < index; i++) {
                this.head = this.head.next;
            }
            return this.head.data;
        }
    }

    insertAt(index, data) {
        let temp;
        let newIndex = 0;
        let list =new Node(data);

        if(!temp) {
            newIndex++;
            temp = this.head;
        }

        while(newIndex <= index){
            temp = temp.next;
            temp.prev.next = list;
            list.prev = temp.prev;
            temp.prev = list;
            list.next = temp;
            newIndex++;
        }

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

    deleteAt(index) {}

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
