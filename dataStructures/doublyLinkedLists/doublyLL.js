
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null; //only new thing from single linked list
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.tail) return undefined;
        let nodeToPop = this.tail;
        if(this.length === 1) {
            this.tail = null;
            this.head = null;

        } else {
            this.tail = nodeToPop.prev;
            this.tail.next = null;
            nodeToPop.prev = null;
        }
        
        this.length--;
        return nodeToPop;

    }

    shift() {
        if(this.length === 0) return undefined;

        let nodeToShift = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            
        } else {
        this.head = nodeToShift.next;
        this.head.prev = null;
        nodeToShift.next = null;
        }
        this.length--;
        return nodeToShift;
    }

    unshift(val) {
        let nodeToAdd = new Node(val);
        if(this.length === 0) {
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            nodeToAdd.next = this.head;
            this.head.prev = nodeToAdd;
            this.head = nodeToAdd;

        }


        this.length++;
        return this;
    
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;

        if(index <= this.length / 2){
            //console.log('working from start');
            let current = this.head;
            for(let i = 0; i <= this.length / 2; i++) {
                if(i === index) {
                    return current;
                }
                current = current.next;
            }
        }

        if (index > this.length / 2) {
            //console.log('working from end');
            let current = this.tail;
            for(let i = this.length-1; i > this.length / 2; i--) {
                //console.log(`i is: ${i}`);
                if(i === index) {
                    return current;
                }
                current = current.prev;
            }
        }

    }

    set(index, value) {
        let node = this.get(index);
        if(!node) return false;
        node.val = value;
        return true;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) {
            this.unshift(value);
            return true;
        }
        if (index === this.length) {
            this.push(value);
            return true;   //instead of returning true
            //could instead return !!this.push(value) which will return true
        }

        let nodeToInsert = new Node(value);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = nodeToInsert;
        nodeToInsert.prev = prevNode;
        nextNode.prev = nodeToInsert;
        nodeToInsert.next = nextNode;
        this.length++;
        return true;

    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let nodeToRemove = this.get(index);
        let nodePrev = nodeToRemove.prev;
        let nodeNext = nodeToRemove.next;

        nodePrev.next = nodeNext;
        nodeNext.prev = nodePrev;

        nodeToRemove.prev = null;
        nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
    }

    print() {
        let arr = [];
        let current = this.head;
        for(let i = 0; i < this.length; i++) {
            arr.push(current.val);
            //console.log(arr);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new DoubleLinkedList;
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
//console.log(list.get(0));
//console.log(list.set(6, "last"));
console.log(list.insert(0, "start"));
console.log(list.insert(-1, "start"));
console.log(list.insert(7, "start"));
console.log(list.insert(4, "mid"));
//console.log(list);
list.print();
console.log(list.remove(1));
console.log(list.remove(4));
list.print();
//list.print();
/*
list.push("last item");
console.log(list);
console.log(list.unshift("firsto"));


let emptyList = new DoubleLinkedList;
console.log(emptyList.unshift("newone"));
console.log(emptyList); */



