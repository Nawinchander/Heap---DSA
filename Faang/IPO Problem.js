// Problem: Choose at most k projects to maximize capital.

// Each project has:

// required capital
// profit

// Heap Pattern:
// Sort by capital
// Max Heap for profits


// Interview Thinking:  “Among affordable projects, pick most profitable.


function findMaxCapital(k, w, profits, capital) {
  let projects = profits.map((p, i) => [capital[i], p]);
  projects.sort((a, b) => a[0] - b[0]);

  let heap = [];
  let i = 0;

  for (let j = 0; j < k; j++) {
    while (i < projects.length && projects[i][0] <= w) {
      heap.push(projects[i][1]);
      i++;
    }

    if (!heap.length) break;

    heap.sort((a, b) => b - a);
    w += heap.shift();
  }

  return w;
}



// Interview Pattern: If the problem says: “Choose best among currently available options”

// Think: Max Heap




