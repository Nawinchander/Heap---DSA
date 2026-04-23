// Smallest Range Covering Elements from K Lists

// This is a real Google-style heap problem.

// Problem: Given K sorted lists, find the smallest range that includes at least one number from each list.

// Heap Pattern: Use Min Heap, track current maximum.

// Interview Thinking: “Keep one element from each list and shrink range.”

function smallestRange(nums) {
  let heap = [];
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    heap.push([nums[i][0], i, 0]);
    max = Math.max(max, nums[i][0]);
  }

  let range = [-Infinity, Infinity];

  while (heap.length === nums.length) {
    heap.sort((a, b) => a[0] - b[0]);
    let [min, row, idx] = heap.shift();

    if (max - min < range[1] - range[0]) {
      range = [min, max];
    }

    if (idx + 1 < nums[row].length) {
      let next = nums[row][idx + 1];
      heap.push([next, row, idx + 1]);
      max = Math.max(max, next);
    }
  }

  return range;
}





