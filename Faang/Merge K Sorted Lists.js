// Merge K Sorted Lists

// Very common at Google.

// Use heap to always extract smallest among K lists.


function mergeKSortedArrays(arrays) {
  const heap = new MinHeap();
  const result = [];

  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      heap.insert([arrays[i][0], i, 0]);
    }
  }

  while (heap.size()) {
    let [value, arrIdx, elIdx] = heap.extractMin();
    result.push(value);

    if (elIdx + 1 < arrays[arrIdx].length) {
      heap.insert([arrays[arrIdx][elIdx + 1], arrIdx, elIdx + 1]);
    }
  }

  return result;
}


/// Complexity

// 0(N log K)

// Where:

// N = total elements
// K = number of lists

