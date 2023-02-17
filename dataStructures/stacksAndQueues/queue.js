//Implementing a queue data structure

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //enqueue will add at the end
    //along with dequeue works FIFO first in
    //first out
    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    //will remove from the start of queue
    //so it will give us the first item we added in
    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);
console.log(q.dequeue());
console.log(q);
