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

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0) {
            //case for when there is only 1 item 
            //in list
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newHead = new Node(val);

        if(!this.head) { //check if list is empty
            this.head = newHead;
            this.tail = newHead;
        } else {
        newHead.next = this.head;
        this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index >= this.length || index < 0) return null;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(val, index) {
        let nodeToSet = this.get(index);
        if (!nodeToSet) return false;
        nodeToSet.val = val;
        return true;
    }

    insert(val, index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) {
            this.push(val);
            return true;  //wwe could instead do return !!this.push(val)
                          //the !! negates it, negates it again, making it true
        }
        if(index === 0) {
            this.unshift(val);
            return true;
        }
        
        let nodeToInsert = new Node(val);
        let previousNode = this.get(index-1);
        let previousNext = previousNode.next;
        previousNode.next = nodeToInsert;
        nodeToInsert.next = previousNext;
        this.length++;
        return true;
    }

    remove (index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();

        let previousNode = this.get(index-1); //retrieve the node 1 before what we
        //are going to remove;
        let removedNode = previousNode.next
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // 0 -> 1 -> 2 -> 3
    /*
    node = 0
    head = 3
    tail = 0
    
    prev = null
    next = null

    next = node.next , next = [1]
    node.next = prev; [null],   so [1] -> null
    prev = node; [0] ,   so   [1] -> [0] -> null 
    node = next;  node = [1]

    next = node.next  , next = [2]
    node.next = prev;   [2] -> [1] -> [0] -> null


    */
    reverse() {
        
        //try this again later today
        //[0], [1], [2], [3]

    }



    //function for testing so we can print out the values of
    //the linked list in an array so we can easily see
    //everything
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
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

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.print();
list.reverse();
list.print();
/*
list.push("hi");
list.push("jimmy");
//console.log(list);
//list.push("you");
//console.log(list);
//list.push(99);
//console.log(list);
//list.traverse();
//console.log(list.pop());
//console.log(list.pop());
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log("***");
console.log(list.unshift("pizza"));
console.log(list);
console.log(list.unshift("monkey"));
console.log(list.unshift("again"));
console.log(list);
console.log(list.get(0));
//console.log(list.get(-5));
console.log(list.set("first", 0));
console.log(list);
console.log(list.set("first", 5));
console.log(list.set("last", 2));
console.log(list);
console.log(list.insert("numba 1 hero", 0));
console.log(list);
console.log(list.insert("end hero", 2));
console.log(list);
console.log(list.get(2));
console.log(list);
console.log(list.remove(3));
console.log(list);
console.log(list.remove(3));
console.log(list);
console.log(list.remove(5));
console.log(list);
list.print();
list.reverse();
list.print();

//console.log(list.tail.next);
//console.log(list);
*/
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

/*
reverse() {
    
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for(let i = 0; i < this.length; i++) {
        next = node.next;
        node.next  = prev;
        prev = node;
        node = next;
    }

    return this;

} */