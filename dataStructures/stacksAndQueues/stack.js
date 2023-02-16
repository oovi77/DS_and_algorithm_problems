//A stack class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);

        if(this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            let firstNode = this.first;
            this.first = node;
            node.next = firstNode;
        }

        this.size++;
        return this.size;
    }

    pop() {
        if(this.size === 0) return null;

        let poppedNode = this.first;

        if(this.size === 1) { //if only one node
            this.first = null;
            this.last = null;
        } else {
            this.first = poppedNode.next;
        }
        this.size--;
        return poppedNode.value;
    }
}

let stack = new Stack();
console.log(stack.push("val0"));
console.log(stack);
console.log(stack.push("val1"));
console.log(stack);
console.log("*******");
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);


