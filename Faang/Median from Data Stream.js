// Median from Data Stream

// Hard-level interview pattern.

// Use:

// Max Heap for left half
// Min Heap for right half

// Keeps median balanced


class MedianFinder {
  constructor() {
    this.small = new MaxHeap();
    this.large = new MinHeap();
  }

  addNum(num) {
    this.small.insert(num);

    if (this.small.peek() > this.large.peek()) {
      this.large.insert(this.small.extractMax());
    }

    if (this.small.size() > this.large.size() + 1) {
      this.large.insert(this.small.extractMax());
    }

    if (this.large.size() > this.small.size()) {
      this.small.insert(this.large.extractMin());
    }
  }

  findMedian() {
    if (this.small.size() > this.large.size()) {
      return this.small.peek();
    }

    return (this.small.peek() + this.large.peek()) / 2;
  }
}


//// This demonstrates mastery of balancing heaps.

