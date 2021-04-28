/*
Is the Last Character an "N" ?

Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

Examples
*/

const isLastCharacterN = (word) => /n$/.test(word);

console.log(isLastCharacterN("Aiden")); // true

console.log(isLastCharacterN("Piet")); // false

console.log(isLastCharacterN("Bert")); // false

console.log(isLastCharacterN("Dean")); // true