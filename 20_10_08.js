// Recursion: Array Sum
// Write a function that finds the sum of an array. Make your function recursive.
// Examples
// sum([1, 2, 3, 4]) ➞ 10
// sum([1, 2]) ➞ 3
// sum([1]) ➞ 1
// sum([]) ➞ 0
// Return 0 for an empty array.

function sum(arr) {
    if (!arr.length) return 0;
    return arr.shift() + sum(arr);
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([1, 2])); // 3
console.log(sum([1])); // 1
console.log(sum([])); // 0
