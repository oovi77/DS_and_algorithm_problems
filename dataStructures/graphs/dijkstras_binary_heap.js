/*
Before we had something like this:
    "A": ["B", "C"] to show that A was connected to B and C
Now, we'll have:
    "A": [{node: "B", weight "10"}]

*/

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        //check if its in the adjacency List, if not then add it in
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
        //saying {node: vertex1, weight} is the same as
        //      {node: vertex1, weight: weight}
    }

    //should return an array of nodes of the shortest path from start to finish
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; //to return at end
        let smallest;

        //build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit
        while(nodes.values.length) {
            console.log(nodes);
            smallest = nodes.dequeue().val; //grabs from queue the smallest priority vertex
            if(smallest === finish){
                //console.log(distances);
                //console.log(previous);
                //we are done
                //build path to return
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity) {
                //loop through neighbors of current smallest vertex
                for(let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]) {
                        //this is updating our distances table
                        //the shortest dist from A table
                        distances[nextNeighbor] = candidate; 
                        previous[nextNeighbor] = smallest; //updating previous

                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }

        }
        //console.log(path);
        return path.concat(smallest).reverse();   //adds our start node (which is,
        //smallest to the path and reverse it to get the order from our start
        //node to finish node)
    }

    /*
    shortestPath(start, end) {
        const distances = {};
        const queue = new PriorityQueue();
        const previous = {};
        const visited = [];

        for(let element in this.adjacencyList) {
            distances[element] = null;
            previous[element] = null;
            if(element === start) {
                queue.enqueue(start, 0);
            } else {
                queue.enqueue(element, Infinity);
            }

        };
        distances[start] = 0;

        //console.log(distances);
        //console.log(queue);
        
        //B: A,
        //C: A,
        //D: C,


        console.log(previous);
        console.log(queue);
        let current = null;
        let distance = 0;

        while(queue.values.length != 0) {
            console.log('test');
            current = queue.dequeue();
            visited.push(current.val);
            if(current.val === start) return previous;

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited.includes(neighbor)) {
                    //calculate distance
                    
                }
            });
            
        }




    } */
}

//priority queue for Dijkstra's Algorithm with Binary heap
//used when we have to pick the node with the smallest distance from
//our starting node
//this gives us the next node to visit

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




let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("F", "E", 1);
graph.addEdge("E", "B", 3);
//console.log(graph.adjacencyList);
console.log(graph.Dijkstra("A", "E"));
//console.log(graph.adjacencyList);
//console.log(graph.adjacencyList["D"][0]["node"]);


