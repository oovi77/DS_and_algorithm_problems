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
}



let tree = new BinarySearchTree();
tree.root = new Node (10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);
console.log(tree.insert(23));
console.log(tree.insert(15));
console.log("test");
//console.log(tree.root.right);
console.log(tree.find(1)); //f
console.log(tree.find(23)); //t
console.log(tree.find(22)); //f
console.log(tree.find(9)); //t
console.log(tree.find(10)); //t


