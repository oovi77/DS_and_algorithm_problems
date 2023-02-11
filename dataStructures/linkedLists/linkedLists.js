//linked list data structure in JavaScript
/*
A linked list is a collection of nodes

A node is a piece of data - val
reference to next node - next

Start by defining a class for node
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null; //this is null, b/c at the beginning there is nothing
        //after the node
    }
}

class SinglyLinkedList {

    // a linked list has a pointer to the head, tail and has a length of the list
    constructor() {
        this.head = null; //at the start these are null
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    pop() {

        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        //loop while current has a next 
        //to point to
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
        //case for when there is only 1 item 
        //in list
        this.head = null;
        this.tail = null;

        }
        return current;
    }
        
    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    } 
}

let list = new SinglyLinkedList();
//console.log(list);
list.push("hi");
list.push("jimmy");
//console.log(list);
//list.push("you");
//console.log(list);
//list.push(99);
//console.log(list);
//list.traverse();
console.log(list.pop());
console.log(list.pop());
console.log(list);
//console.log(list);

/*
Example of how we could make a linked list with just the node class:

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how are you");

*/

/*
//push function of a singly linked list

        let node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
            //maybe this should be this.tail = this.head;

        }
        this.tail.next = node;
        this.tail = node;

        this.length++;
        return this;

*/

/*
    pop() {
        let current = this.head;
        let previous = this.head;
        while(current) {
            previous = current;
            if(previous === this.tail) {
                this.head = null;
                this.tail = null;
                this.length = 0;
                return undefined;

            }
            current = current.next;
            if(current === this.tail) {
                previous.next = null;
                this.tail = previous;
                this.length--;
                return current;

            }
        }

    }


*/