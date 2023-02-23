class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    /*
    insert(value) {

        this.values.push(value);
        if(this.values.length === 1) {
            return this;
        }

        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while(this.values[index] > this.values[parentIndex]) {

            let temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);

        }
        return this;
    } */
    
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
        return this; //comment this out, only for testing purposes
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIndex = Math.floor((idx - 1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[idx] = parent;
            idx = parentIndex;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; //this element is always the
        //thing that we are trying to position (sinkDown) correctly in
        //the array (or tree)

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null; 

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            //check to swap with the right child 
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            //exit if nothing to swap
            if(swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    
    //my version
    /*
    extractMax() {
        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop();

        let length = this.values.length - 1;

        let returnMax = this.values[0];
        this.values[0] = this.values[length];
        this.values.pop();

        let parentIndex = 0;
        let parent = this.values[parentIndex];
        //console.log(`start: ${this.values}`);
        while(true) {

            let indexLeft = (2 * parentIndex) + 1;
            let indexRight = (2 * parentIndex) + 2;
            let valueLeft = false;
            let valueRight = false;

            if(indexLeft <= length) {
                valueLeft = this.values[indexLeft];
            } else {
                valueLeft = false;
            }
            if (indexRight <= length) {
                valueRight = this.values[indexRight];
            } else {
                valueRight = false;
            }

            if(valueRight > parent && valueLeft > parent) {
                if(valueRight >= valueLeft) {
                    this.values[indexRight] = parent;
                    this.values[parentIndex] = valueRight;
                    parentIndex = indexRight;
                    parent = this.values[parentIndex];
                } else if (valueLeft > valueRight) {
                    this.values[indexLeft] = parent;
                    this.values[parentIndex] = valueLeft;
                    parentIndex = indexLeft;
                    parent = this.values[parentIndex];
                }

            } else if (valueRight > parent) {
                this.values[indexRight] = parent;
                this.values[parentIndex] = valueRight;
                parentIndex = indexRight;
                parent = this.values[parentIndex];
            } else if (valueLeft > parent) {
                this.values[indexLeft] = parent;
                this.values[parentIndex] = valueLeft;
                parentIndex = indexLeft;
                parent = this.values[parentIndex];
            } else {
                
                break;
            }
            //console.log(`loop: ${this.values}`);
        }


        console.log(`end: ${this.values}`);
        return returnMax;
    }  */
}

let tree = new MaxBinaryHeap;
let newtree = new MaxBinaryHeap;
let atree = new MaxBinaryHeap;

/*
console.log(tree.insert(1)); //[1]
console.log(tree.insert(24)); //[24, 1]
console.log(tree.insert(19)); //[24, 1, 19]
console.log(tree.insert(9)); //[24, 9, 19, 1]
console.log(tree.insert(99)); //[99, 24, 19, 1, 9]
console.log('*****');
console.log(newtree.insert(41));
console.log(newtree.insert(39));
console.log(newtree.insert(33));
console.log(newtree.insert(18));
console.log(newtree.insert(27));
console.log(newtree.insert(12));
console.log(newtree.insert(55));
console.log(newtree.insert(1));
console.log(newtree.insert(45));
console.log(newtree.insert(199));

console.log(0 === false);
console.log (false > 22); */
atree.insert(70)
atree.insert(67)
atree.insert(65)
atree.insert(45)
atree.insert(58)
atree.insert(40)
atree.insert(53)
atree.insert(44)
atree.insert(15)
atree.insert(31)
console.log(atree.values);
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());
console.log(atree.extractMax());

