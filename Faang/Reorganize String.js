/// problem 

// Rearrange a string so that no two adjacent characters are the same.

// s = "aaabbc"
// Output: "ababac"


// Heap Pattern:

// Use Max Heap

// Why?

// Always pick the character with highest remaining frequency.

// Interview Thinking:

// “Greedily place the most frequent char, but prevent repeating previous char.”


function reorganizeString(s) {
  const freq = {};
  for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

  let heap = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  let prev = null, result = "";

  while (heap.length) {
    heap.sort((a, b) => b[1] - a[1]);
    let [char, count] = heap.shift();

    result += char;
    count--;

    if (prev) heap.push(prev);
    prev = count > 0 ? [char, count] : null;
  }

  return result.length === s.length ? result : "";
}


// Interview Pattern:

// If the problem says:

// “pick highest frequency repeatedly”

// Think:

// Max Heap + Greedy


