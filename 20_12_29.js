// A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.
//     Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"
// const f2 = redundant("pear")
// f2() ➞ "pear"
// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

function redundant(str) {
    return () => str;
}

const f1 = redundant("apple")
f1(); // "apple"

const f2 = redundant("pear")
f2(); // "pear"

const f3 = redundant("")
f3(); // ""





// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit.Create a function that takes an integer and returns whether it's a repdigit or not.
// Examples
// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false
// Notes
// The number 0 should return true(even though it's not a positive number).

function isRepdigit(number) {
    return new Set(String(number)).size == 1;
}

console.log(isRepdigit(66)); // true
console.log(isRepdigit(0)); // true
console.log(isRepdigit(-11)); // false