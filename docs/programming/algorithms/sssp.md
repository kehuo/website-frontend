---
id: single-source-shortest-paths
title: Single-Source Shortest Paths
sidebar_label: Single-Source Shortest Paths
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example

![Graph](../../../static/img/algorithms/graph/weighted_graph.png)

Adjacency Matrix

![Matrix](../../../static/img/algorithms/graph/sssp_adjacency_matrix.png)

## Dijkstra's Algorithm

Require non-negative weights

Time Complexity: O((|E|+|V|) \log |V|) (use heap or priority queue) or O(|E|+|V| \log |V|) (use Fibonacci heap min-priority queue)

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>
<TabItem value="py">

```py
from heapq import heappop, heappush

def dijkstra(matrix, source) -> dict:
    # optimized by heap
    h = [(0, source)]
    visited = {}
    while h and len(visited) < len(matrix):
        weight, cur = heappop(h)
        if cur in visited:
            continue
        visited[cur] = weight
        for i, w in enumerate(matrix[cur]):
            if w > 0 and i not in visited:
                heappush(h, (weight + w, i))
    return visited
```
</TabItem>

<TabItem value="java">

```java
Map<Integer, Integer> dijkstra(int[][] matrix, int source) {
    int n = matrix.length;
    // PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    PriorityQueue<Entry> pq = new PriorityQueue<>();
    pq.add(new Entry(0, source));
    Map<Integer, Integer> visited = new HashMap<>();
    while (!pq.isEmpty() && visited.size() < n) {
        Entry e = pq.poll();
        if (visited.containsKey(e.number)) {
            continue;
        }
        visited.put(e.number, e.distance);
        for (int i = 0; i < n; i++) {
            int w = matrix[e.number][i];
            if (w > 0 && !visited.containsKey(i)) {
                pq.add(new Entry(e.distance + w, i));
            }
        }
    }

    return visited;
}
```

</TabItem>
</Tabs>

[comment]: # "# todo: 加改进版heap"
