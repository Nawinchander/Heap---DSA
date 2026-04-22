// Task Scheduler / CPU Scheduling

// Used in systems scheduling.

// Given tasks frequencies, find minimum intervals.

// Use max heap to always pick most frequent task.

function leastInterval(tasks, n) {
  const freq = {};
  for (let task of tasks) freq[task] = (freq[task] || 0) + 1;

  const maxHeap = new MaxHeap();
  for (let count of Object.values(freq)) maxHeap.insert(count);

  let time = 0;
  const queue = [];

  while (maxHeap.size() || queue.length) {
    time++;

    if (maxHeap.size()) {
      let count = maxHeap.extractMax() - 1;
      if (count > 0) queue.push([count, time + n]);
    }

    if (queue.length && queue[0][1] === time) {
      maxHeap.insert(queue.shift()[0]);
    }
  }

  return time;
}


