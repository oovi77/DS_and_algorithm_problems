//graph class using an adjacency list

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    //could also use array.filter for this
    //this.adjacenyList[v1] = this.adjacencyList[v1].filter(v => v !== v1);
    removeEdge(v1, v2) {
        let v1Index = this.adjacencyList[v2].indexOf(v1);
        let v2Index = this.adjacencyList[v1].indexOf(v2);

        this.adjacencyList[v2].splice(v1Index, 1);
        this.adjacencyList[v1].splice(v2Index, 1);
    }

    removeVertex(v1) {
        while(this.adjacencyList[v1].length != 0) {
            this.removeEdge(v1, this.adjacencyList[v1][0]);
        }
        delete this.adjacencyList[v1];
        //delete key in the adjancy list for that vertex
    }

    DFS_recursive(node) {
        let result = [];
        let visited = {};
        let list = this.adjacencyList; //need to do this beceasue the
        //meaning of 'this' changes in the DFS helper function below
        
        function DFS(vertex) {
            if(!vertex) { //we never actually get to here
                console.log("end");
                return null;
            }
            result.push(vertex); //add the vertex to result
            visited[vertex] = true; //'visit' the vertex
            
            //loop through and call the recursive function on each
            //of the current vertex's neighbors
            for(let i = 0; i < list[vertex].length; i++) {
                let v1 = list[vertex][i];
                if(!(v1 in visited)) DFS(v1);
            }
        }
        DFS(node);  //start the recursion by calling it on the
        //first node we want to visit
        return result;
    }

    
    //beter version of depth first iterative

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length) {
            //console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    breadthFirstSearch(start) {

        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;

        let current = null;

        while(queue.length) {
            current = queue.shift();
            result.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;

    }

    /*
    DFS_iterative(start) {
        let stack = [];
        let result = [];
        let visited = {};
        
        
        stack.push(start); //start the stack with the start vertex inside it
        visited[start] = true;   //set the start vertext to be 'visited'
        let current = start;

        
        while(stack.length != 0) {
            console.log(stack);
            current = stack.pop();
            result.push(current);

            for(let i = 0; i < this.adjacencyList[current].length; i++) {
                if(!(this.adjacencyList[current][i] in visited)){
                    visited[this.adjacencyList[current][i]] = true;
                    stack.push(this.adjacencyList[current][i]);
                }
            }
        }
        return result;
    } */
  
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
//console.log(g.DFS_recursive("A"));
//console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirstSearch("A"));
/*
let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen")
g.addVertex("Toronto");
g.addVertex("Waterloo");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Waterloo");
g.addEdge("Toronto", "Dallas");
g.addEdge("Aspen", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Waterloo", "Toronto");
//g.removeEdge("Aspen", "Dallas");
//g.removeEdge("Dallas", "Tokyo");
g.removeVertex("Dallas");
console.log(g);

*/