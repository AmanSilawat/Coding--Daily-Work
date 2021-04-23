/*
First Class, Second Class and Third Class Levers

Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

1. In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
2. In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
3. In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.
*/

function determineLever_(arr) {
    let d = { 'efl': "first class lever", "elf": "second class lever", "fel": "third class lever" }
    return d[arr.join('')]
}

function determineLever(arr) {
    return ['third', 'first', 'second'][arr.indexOf('f')] + ' class lever';
}


console.log(determineLever(["e", "f", "l"])); // "first class lever"
console.log(determineLever(["e", "l", "f"])); // "second class lever"
console.log(determineLever(["f", "e", "l"])); // "third class lever"