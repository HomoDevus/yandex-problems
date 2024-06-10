class Graph {
  constructor(n) {
    this.adjList = new Array(n);
    for (let i = 0; i < n; i++) {
      this.adjList[i] = [];
    }
  }

  addEdge(u, v, w) {
    this.adjList[u].push({ v, w });
    this.adjList[v].push({ v: u, w });
  }

  dfs(node, parent, radius) {
    let maxDistance = 0;
    for (const neighbor of this.adjList[node]) {
      if (neighbor.v !== parent) {
        const distance = neighbor.w + this.dfs(neighbor.v, node, radius);
        maxDistance = Math.max(maxDistance, distance);
      }
    }
    return maxDistance;
  }

  findRadius() {
    let radius = Infinity;
    for (let i = 0; i < this.adjList.length; i++) {
      radius = Math.min(radius, this.dfs(i, -1, radius));
    }
    return radius;
  }
}

// Пример ввода
const n = 3;
const edges = [
  [1, 2, 5],
  [2, 3, 10],
];

const graph = new Graph(n);
for (const edge of edges) {
  const [u, v, w] = edge;
  graph.addEdge(u - 1, v - 1, w);
}

const result = graph.findRadius();
console.log(result); // Вывод: 5
