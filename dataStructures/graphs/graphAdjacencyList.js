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
}




let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen")
g.addEdge("Dallas", "Tokyo");

g.addEdge("Dallas", "Aspen");
g.removeEdge("Aspen", "Dallas");
g.removeEdge("Dallas", "Tokyo");
console.log(g);