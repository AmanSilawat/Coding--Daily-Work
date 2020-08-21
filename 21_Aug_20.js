// 158 ==>	Is the Sum of Letters Even or Odd?
// 	Create a function that takes a string and returns true if the sum of the index position of every letter is even and false if the sum is odd. Case insensitive. Ignore non-letter symbols.

function isAlpha(string) {
    // Patter 1 with step
    // step1 remove non a-z
    // let str = string.toLowerCase().match(/[a-z]/g)
    // // step2 create an array with letters positions in alphabets
    // let indexes = str.map(element=>element.charCodeAt()-96)
    // // step3 add value of array
    // let sum = indexes.reduce((accumlator,currentValue)=>accumlator+currentValue)
    // // step4 return true or false based on even or odd
    // return sum%2==0?true:false

    // Patter 2
    return (
        string.toLowerCase().match(/[a-z]/g).reduce((accumlator, currentValue) => accumlator + currentValue.charCodeAt() - 96, 0) % 2 == 0
    );
}
isAlpha("i'am king"); // True
// 9 + 1 + 13 + 11 + 9 + 14 + 7 = 64 (even)
isAlpha("True"); // True
// 20 + 18 + 21 + 5= 64 (even)
isAlpha("alexa"); // false
// 1 + 12 + 5 + 24 + 1= 43 (odd)

// 159 ==>	Sort By Index of Character
// 	Write a function that sorts an array of characters alphabetically in ascending order (a-z) by the character at the n-th character. All inputs will be of same length.

function sortByCharacter(array, number) {
    //step1 sort
    return array.sort((a, b) => {
        //step1.2 sort based on index & return
        // return a[number-1] < b[number-1]?-1:1
        return a.charCodeAt(number - 1) - b.charCodeAt(number - 1);
    });
}
sortByCharacter(["az16", "by35", "cx24"], 2); // ["cx24", "by35", "az16"]
// By 2nd character: ["x", "y", "z"] is in alphabetical order.
sortByCharacter(["mayor", "apple", "petal"], 5); // ["apple", "petal", "mayor"]
// By 5th character: ["e", "l", "r"] is in alphabetical order.
sortByCharacter(["mate", "team", "bade"], 3); // ["team", "bade", "mate"]

// 160 ==>	Good Match?
// 	In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums). If the array has an odd length, one number is (sadly) left out, so you should return "bad match".
function isGoodMatch(array) {
    //step1 return bad match is array length is odd
    if (array.length % 2 != 0) {
        return "Bad match";
    } else {
        //step2 create pair and sum
        let result = [];
        for (let i = 0; i < array.length; i += 2) {
            result.push(array[i] + array[i + 1]);
        }
        //step3 return array
        return result;
    }
}
console.log(isGoodMatch([1, 2, 4, 7])); //[1+2, 4+7]) [3, 11]
console.log(isGoodMatch([5, 7, 9, -1, 4, 2])); // [12, 8, 6]
console.log(isGoodMatch([5, 7, 9, -1, 4, 2, 3])); // "bad match"
console.log(isGoodMatch([2, 6, 7, -2, 4])); // "bad match"

// 161 ==>	Is It the Same Upside Down?
// 	The number 6090609 has a special property: if you turn the number upside down (imagine rotating your screen 180 degrees), you get 6090609 again. Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.
// 		sameUpsidedown("6090609") ➞ true
// 		sameUpsidedown("9669") ➞false // Becomes 6996 when upside down.
// 		sameUpsidedown("69069069") ➞ true
function sameUpsidedown(string) {
    //step1 reverse the string
    //step2 flip each element
    //step3 if no. is same return true else false
    return (
        string ==
        string.split("").reverse().map((element) => (element == 6 ? 9 : element == 9 ? 6 : 0)).join("")
    );
    // use regex
}
console.log(sameUpsidedown("6090609")); // true
console.log(sameUpsidedown("9669")); //false // Becomes 6996 when upside down.
console.log(sameUpsidedown("69069069")); // true
