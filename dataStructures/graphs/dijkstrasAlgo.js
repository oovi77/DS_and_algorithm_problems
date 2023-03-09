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

//priority queue for Dijkstra's Algorithm
//used when we have to pick the node with the smallest distance from
//our starting node
//this gives us the next node to visit

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    //push the object onto the queue and sort the queue by priority
    //every time we insert something we resort
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };

    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
        //if a - b is < 0, sort a before b
        // a = 2, b = 5, 2 - 5 = -3, so order is 2, 5, or a, b
    };
}

/*
let q = new PriorityQueue();
q.enqueue("C", 5);
q.enqueue("B", 3);
q.enqueue("D", 2);
q.enqueue("Q", 20);
console.log(q); //sorted by priority in ascending order
*/


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


