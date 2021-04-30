// Create a range function

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => (i * step) + start);

console.log(range(1, 10, 1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 10, 2)); // [ 5, 7, 9 ]


