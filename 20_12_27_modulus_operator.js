// The Modulus Operator Function
// Create a function that will work as the modulus operator % without using the modulus operator.The modulus operator is a way to determine the remainder of a division operation.Instead of returning the result of the division, the modulo operation returns the whole number remainder.
//     Examples
// mod(5, 2) ➞ 1
// mod(218, 5) ➞ 3
// mod(6, 3) ➞ 0
// Notes
// Don't use the % operator to return the results.

function mod(a, b) {
    let temp = Math.floor(a / b);
    b = temp * b
    return a - b;
}

console.log(mod(5, 2)); // ➞ 1
console.log(mod(218, 5)); // ➞ 3
console.log(mod(6, 3)); // ➞ 0