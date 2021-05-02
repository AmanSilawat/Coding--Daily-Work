/*
Find the Amount of Potatoes

Create a function to return the amount of potatoes there are in a string.
*/

function potatoes(str) {
    return str.match(/potato/gi).length;
}
console.log(potatoes("potato")); // 1
console.log(potatoes("potatopotato")); // 2
console.log(potatoes("potatoapple")); // 1