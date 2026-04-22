/// Find the K largest element

nums = [3,2,1,5,6,4], k = 2
Output = 5

// Approach:

// Use min heap of size k

// Keep k largest elements
// Top = kth largest

function findKthLargest(nums, k) {
  const heap = new MinHeap();

  for (let num of nums) {
    heap.insert(num);
    if (heap.size() > k) heap.extractMin();
  }

  return heap.peek();
}

/// Complexity

/// O(n log k)

// Better than sorting O(n log n)