// Problem: Find minimum meeting rooms needed.

// [[0,30],[5,10],[15,20]]
// Output: 2
// Heap Pattern: Use Min Heap for meeting end times.


// Interview Thinking: “Reuse earliest ending room if available.”


function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const heap = [];

  for (let [start, end] of intervals) {
    heap.sort((a, b) => a - b);

    if (heap.length && heap[0] <= start) {
      heap.shift();
    }

    heap.push(end);
  }

  return heap.length;
}



