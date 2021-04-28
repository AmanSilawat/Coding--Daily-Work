/*
Count the Syllables

Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

Notes
For simplicity, please note that each syllable will consist of two letters only.
Your code should accept strings of any case (upper, lower and mixed case).
*/

const countSyllables = (str) => str.match(new RegExp(str.substr(0, 2), 'gi')).length;
const countSyllables_ = (str) => str.match(/.{2}/g).length;

console.log(countSyllables("Hehehehehehe")); // 6

console.log(countSyllables("bobobobobobobobo")); // 8

console.log(countSyllables("NANANA")); // 3