class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeft(i) {
    return 2 * i + 1;
  }

  getRight(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[this.getParent(index)] > this.heap[index]
    ) {
      this.swap(index, this.getParent(index));
      index = this.getParent(index);
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;

    while (this.getLeft(index) < this.heap.length) {
      let smallerChild = this.getLeft(index);
      let right = this.getRight(index);

      if (
        right < this.heap.length &&
        this.heap[right] < this.heap[smallerChild]
      ) {
        smallerChild = right;
      }

      if (this.heap[index] <= this.heap[smallerChild]) break;

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

