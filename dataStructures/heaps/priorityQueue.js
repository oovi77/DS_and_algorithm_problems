class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    
    enqueue(val, priority) {

        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        //return this; //comment this out, only for testing purposes
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIndex = Math.floor((idx - 1)/2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[idx] = parent;
            idx = parentIndex;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
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
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            //check to swap with the right child 
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
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

}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.values);
