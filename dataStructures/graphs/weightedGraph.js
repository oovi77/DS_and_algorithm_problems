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
}


let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);
console.log(graph.adjacencyList);

