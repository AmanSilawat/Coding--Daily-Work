/*
You can assign variables from arrays like this:

arr = [1, 2, 3, 4, 5, 6, 7, 8]
first = arr[0]
second = arr[1]
third = arr[2]
other = arr.slice(3)

console.log(first) ➞ outputs 1
console.log(second) ➞ outputs 2
console.log(third) ➞ outputs 3
console.log(other) ➞ outputs[4, 5, 6, 7, 8]
However, this is long and tedious.Instead, we can use Object Destructuring to create all those variables in one line.Your task: Create variables first, second, third and other from the given array using Destructuring Assignment(check the Resources tab for some examples).
*/
let [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];