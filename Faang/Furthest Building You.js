// Problem: You have bricks and ladders.

// Find the furthest building reachable.

// Heap Pattern: Use Min Heap

// Store climbs where ladders were used.

// Interview Thinking: “Use ladders for biggest climbs, bricks for smaller climbs.”

// Heap helps dynamically decide.



function furthestBuilding(heights, bricks, ladders) {
  const heap = [];

  for (let i = 0; i < heights.length - 1; i++) {
    let diff = heights[i + 1] - heights[i];
    if (diff <= 0) continue;

    heap.push(diff);
    heap.sort((a, b) => a - b);

    if (heap.length > ladders) {
      bricks -= heap.shift();
    }

    if (bricks < 0) return i;
  }

  return heights.length - 1;
}


// Interview Pattern: If problem says: “Allocate limited best resources optimally”

// Think: Heap + Greedy



