//class for binary search tree


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val); //new node to be inserted
        if(this.root === null) {  //check if root of the tree exists
            this.root = newNode;
            return this;
        }
        
        let current = this.root;

        while(1) {
            if(val === current.value) return undefined; //up to you how you
            //handle duplicates, sometimes they are ignored, sometimes
            //nodes have an extra field, where they count how many
            //times they appear in the tree
            if(newNode.value > current.value) {
                if(current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    return this;
                }
            } else if (newNode.value < current.value) {
                if(current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    return this;
                }
            }
        }
        
        //return this;
        
    }

    find(val) {
        let check = false;
        if(this.root === null) return check;

        if(this.root.value === val) {
            check = true;
        }

        let current = this.root;

        while(current) {
            if(val === current.value) {
                check = true;
                break;
            } else if (val > current.value) {
                current = current.right;
            } else if (val < current.value) {
                current = current.left;
            }
        }
        if(!check) return undefined;
        return current;
    }

    //breadth first search (BFS) to visit every node in the tree
    bfs() {
        let queue = []; //use shift to remove from start
        //and push to add to the queue, FIFO
        let visited = [];

        if(!this.root) return visited;
        queue.push(this.root);

        let current = null;
        while(queue.length != 0) { //while there is something in the queue
            current = queue.shift(); //take from the beginning of the queue
            visited.push(current.value);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return visited;
    }
}

//            10
//         7      15
//      5     9       23
//          8          
let tree = new BinarySearchTree();

/*
tree.root = new Node (10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);
console.log(tree.insert(23));
//console.log(tree.insert(15));
console.log(tree.insert(5));
console.log(tree.insert(8));
console.log("test");
console.log(tree.bfs());
//console.log(tree.root.right);
*/

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bfs());


