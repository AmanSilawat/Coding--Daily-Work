// 117 ==>	Is the String in Order?
// 	Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.
console.log("117 --->")
function isInOrder(str) {
    return str.split("").sort().join("") == str
}
console.log(isInOrder("abc")) //true
console.log(isInOrder("123")) //true
console.log(isInOrder("xyzz")) //true



console.log("118 --->")
// 118 ==>	Fix the Error: Value vs. Reference Types
// 	Create a function that returns true if two arrays contain identical values, and false otherwise.
// 	To solve this question, your friend writes the following code:
// 		function checkEquals(arr1, arr2) {
// 			if (arr1 === arr2) {
// 				return true
// 			} else {
// 				return false
// 			}
// 		}
// 	But testing the code, you see that something is not quite right. Running the code yields the following results:
// 		checkEquals([1, 2], [1, 3]) ➞ false
// 		// Good so far...
// 		checkEquals([1, 2], [1, 2]) ➞ false
// 		// Yikes! What happened?
// 	Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:

function checkEquals(arr1, arr2) {
    //PATTERN 1----
    // if (arr1.join("") === arr2.join("")) {
    //     return true
    // } else {
    //     return false
    // }

    //PATTERN 2----
    // if (arr1.toString() === arr2.toString()) {
    //       return true
    //   } else {
    //       return false
    //   }

    //PATTERN 3----
    //   if (String(arr1) === String(arr2)) {
    //     	return true
    //     } else {
    //         return false
    // }

    //PATTERN 4----
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        return true
    } else {
        return false
    }
}
console.log(checkEquals([1, 2], [1, 3]))// false
console.log(checkEquals([1, 2], [1, 2]))// true
console.log(checkEquals([4, 5, 6], [4, 5, 6]))// true
console.log(checkEquals([4, 7, 6], [4, 5, 6]))// false



console.log("119 --->")
// 119 ==>	Fix the Error / Comparing Arrays (Part #2)
// 	Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.
// 	To solve this question, your friend initially wrote the following code:	
// 		function checkEquals(arr1, arr2) {
// 			if (arr1 === arr2) {
// 				return true
// 			} else {
// 				return false
// 			}
// 		}
// 	Your friend did some more research and he fixed the code into the following:
// 		function checkEquals(arr1, arr2) {
// 			if (arr1.join("") === arr2.join("")) {
// 				return true
// 			} else {
// 				return false
// 			}
// 		}
// 	It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?


function checkEquals(arr1, arr2) {
    //Compairing nD Array Usin Flat ---> Never Use It
    // return arr1.flat(Infinity).join("") === arr2.flat(Infinity).join("")

    //Compairing nD Array Using Recursion
    if ((Array.isArray(arr1) == false || Array.isArray(arr2) == false) || (arr1.length != arr2.length)) { //array1[i] instanceof Array
        return false
    }
    for (let i = 0, j = arr1.length; i < j; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (checkEquals(arr1[i], arr2[i]) == false) {
                return false
            }
        } else {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
    }
    return true
    // Compairing 1D Array -----
    // if (arr1.length === arr2.length) {
    //     for (let i = 0; i < arr1.length; i++) {
    //         if (arr1[i] != arr2[i]) {
    //             return false
    //         }
    //     }
    //     return true
    // } else {
    //     return false
    // }
}


// nD Array (console) -----
console.log(checkEquals(
    [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]],
    [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]],
));
console.log(checkEquals(
    [1, [2], 3, [1, [2], 3, [1, [2], 3, [1, 2, 3, [1, [2], 3]]]]],
    [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]],
));
console.log(checkEquals(
    [1, 2, 3, [1, 2, 3,[1, 2, 3], [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]],
    [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]],
));


// Compairing 1D Array (console) -----
//console.log(checkEquals([1, 2], [1, 3]) ); // false
//console.log(checkEquals([1, 2], [1, 2]) ); // true
//console.log(checkEquals([4, 5, 6], [4, 5, 6]) ); // true
//console.log(checkEquals([4, 7, 6], [4, 5, 6]) ); // false
//console.log(checkEquals([1, 12], [11, 2]) ); // false



console.log("120 --->")
// 120 ==>	Unlucky 13
// 	Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.
function unlucky13(array) {
    return array.filter(element => element % 13)
}

console.log( unlucky13([53, 182, 435, 591, 637]) ); // [53, 435, 591]
// 182 and 637 are divisible by 13.
console.log( unlucky13([24, 316, 393, 458, 1279]) ); // [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.
console.log( unlucky13([104, 351, 455, 806, 871]) ); // []
// All numbers in the array are divisible by 13.



console.log("121 --->")
// 121 ==>	Return First and Last Parameter
// 	Write two functions:
// 	1)	firstArg() should return the first parameter passed in.
// 	2)	lastArg() should return the last parameter passed in.
// 	Return undefined if the function takes no parameters.
// 	If the function only takes in one parameter, the firstArg and lastArg functions should return the same value.

//PATTERN 1 ----
// function firstArg(...arg){
//     return arg.shift()
// }
// function lastArg(...arg){
//     return arg.pop()
// }

//PATTERN 2 ----
function firstArg() {
    return arguments.shift() //arguments[0]
}
function lastArg() {
    return arguments.pop()  //arguments[arguments.length - 1] or arguments.reverse[0]
}
console.log(firstArg(1, 2, 3)) //1
console.log(lastArg(1, 2, 3)) //3
console.log(firstArg(8)) //8
console.log(lastArg(8)) //8



console.log("122 --->")
// 122 ==>	Next Element in Arithmetic Sequence
// 	Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.
function nextElement(arr) {
    return (arr[1] - arr[0]) + arr[arr.length - 1]
}
console.log(nextElement([3, 5, 7, 9])); // 11
console.log(nextElement([-5, -6, -7])); // 8
console.log(nextElement([2, 2, 2, 2, 2])); // 2



console.log("123 --->")
// 123 ==>	Calculate Determinant of a 2x2 Matrix
// 	Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:
// 		[[a, b], [c, d]]
// 		calcDeterminant([
// 			[1, 2],
// 			[3, 4]
// 		]) ➞ -2
// 		calcDeterminant([
// 			[5, 3],
// 			[3, 1]
// 		]) ➞ -4
// 		calcDeterminant([
// 			[1, 1],
// 			[1, 1]
// 		]) ➞ 0
// 	Matrix will be in 2 * 2 form only.

//PATTERN 1 ----
// function calcDeterminant([arr1,arr2]){
//     return (arr1[0] * arr2[1]) - (arr1[1] * arr2[0])
// }

//PATTERN 2 ----
// function calcDeterminant([[a,b],[c,d]]){
//     return (a * d) - (b * c)
// }

//PATTERN 3 ----
function calcDeterminant(arr) {
    let [a, b, c, d] = arr.flat(Infinity)
    return (a * d) - (b * c)
}
console.log(calcDeterminant([
    [1, 2],
    [3, 4]
]))
console.log(calcDeterminant([
    [5, 3],
    [3, 1]
]))
console.log(calcDeterminant([
    [1, 1],
    [1, 1]
]))



console.log("124 --->")
// 124 ==>	Check Factors
// 	Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

//PATTERN 1 -----
function checkFactors(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number % array[i]) {
            return false
        }
    }
    return true
}

//PATTERN 2 -----
// NTH number of all factors of numbers
// function checkFactors(number){
//     let dummy = []
//       for(let i = 1; i<=number; i++){
//           if(number%i==0){
//               dummy.push(i)
//           }
//       }
//       return dummy
//   }
//   console.log(checkFactors(12)) //[1, 2, 3, 4, 6, 12]
//   console.log(checkFactors(36)) //[1, 2, 3, 4, 6, 9, 12, 18, 36]

// getting all the factors of a number using form and filter-----

console.log(checkFactors([2, 3, 4], 12)) //true
// 		// Since 2, 3, and 4 are all factors of 12.
console.log(checkFactors([1, 2, 3, 8], 12)) //false
// 		// 8 is not a factor of 12.
console.log(checkFactors([1, 2, 50], 100)) //true
console.log(checkFactors([3, 6], 9)) //false



console.log("125 --->")
// 125 ==>	Reverse Coding Challenge
// 	This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs. Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
function reverseChallange(array, number) {
    return array.map(element => element % number)
}

console.log(reverseChallange([5, 7, 8, 2, 1], 2))// [1, 1, 0, 0, 1]
console.log(reverseChallange([9, 8, 16, 47], 4))// [1, 0, 0, 3]
console.log(reverseChallange([17, 11, 99, 55, 23, 1], 5))// [2, 1, 4, 0, 3, 1]
console.log(reverseChallange([6, 1], 7))// [6, 1]
console.log(reverseChallange([3, 2, 9], 3))// [0, 2, 0]
console.log(reverseChallange([48, 22, 0, 19, 33, 100], 10))// [8, 2, 0, 9, 3, 0]




console.log("126 --->")
// 126 ==>	Generate a Countdown of Numbers in an Array
// 	Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
function countdown(number) {
    //PATTERN 1-----
    // let dummy = []
    // for (let i = number; i >=0; i--) {
    //     dummy.push(i)
    // }
    // return dummy

    //PATTERN 2-----
    return Array.from({ length: number + 1 }, (x, y) => y).reverse()
}
console.log(countdown(5)) // [5, 4, 3, 2, 1, 0]
console.log(countdown(1)) // [1, 0]
console.log(countdown(0)) // [0]



console.log("127 --->")
// 127 ==>	Between Words
// 	Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.
// 	All letters will be in lowercase.
// 	All three words will be different.
// 	Remember that the string word is in the middle.
function isBetween(first, last, word) {
    return word.toLowerCase().trim() > first.toLowerCase().trim() && word.toLowerCase().trim() < last.toLowerCase().trim()
}
console.log(isBetween("apple", "banana", "azure")) //true
console.log(isBetween("monk", "monument", "monkey")) //true
console.log(isBetween("bookend", "boolean", "boost")) //false



console.log("128 --->")
//   128 ==>	Re-Form the Word
// 	A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.
function getWord(str1, str2) {
    // return str1[0].toUpperCase() + str1.slice(1) + str2
    return str1.charAt(0).toUpperCase() + str1.substr(1) + str2
}
console.log(getWord("seas", "onal")) //"Seasonal"
console.log(getWord("comp", "lete")) //"Complete"
console.log(getWord("lang", "uage")) //"Language"



console.log("129 --->")
//   129 ==>	Fix the Error: Filtering out Empty Arrays
// 	I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:
// 		function removeEmptyArrays(arr) {
// 			return arr.filter(x => x !== [])
// 		}
// 	However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.
// 		// What I want:
// 		removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
// 		removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]
// 		// What I am getting:
// 		removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
// 		removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
function removeEmptyArrays(arr) {
    return arr.filter(x => x.length != 0)
}
console.log(removeEmptyArrays(["a", "b", []])) // ["a", "b", []]
console.log(removeEmptyArrays([1, 2, [], 4])) // [1, 2, [], 4]



console.log("130 --->")
// 130 ==>	Filter by Digit Length
// 	Create a function that filters out an array to include numbers who only have a certain number of digits.
// 	If no numbers of the specified digit length exist, return an empty array.
// 	If all numbers in the array have the specified digit length, return original array.
// 	The sub-array returned should have the same relative order as the original array.
// 		filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// 		// Include only numbers with 3 digits.
// 		filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
// 		// Include only numbers with 1 digit.
// 		filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
// 		// No numbers with only 1 digit exist => return empty array.
// 		filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
function filterDigitLength(array, len) {
    return array.filter(element => String(element).length == len)
}
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3))
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1))
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1))
console.log(filterDigitLength([5, 6, 8, 9], 1))




console.log("131 --->")
// 131 ==>	Lexicographically First and Last
// 	Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. Output the results in the following manner:
// 		firstAndLast(string) ➞ [first, last]
// 		firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]
// 		firstAndLast("bench") ➞ ["bcehn", "nhecb"]
// 		firstAndLast("scoop") ➞ ["coops", "spooc"]
// 	Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
// 	Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).
// 1 ==> https://stackoverflow.com/questions/45950646/what-is-lexicographical-order
// 2 ==> https://www.youtube.com/watch?v=pMS4P7wxTU8
// 3 ==> https://www.youtube.com/watch?v=goUlyp4rwiU
// 4 ==> https://www.youtube.com/watch?v=LtlZtFXe8Io


function firstAndLast(str) {
    return [str.split('').sort().join(''), str.split('').sort().reverse().join('')];
}

console.log( firstAndLast("marmite") ); // ["aeimmrt", "trmmiea"]
console.log( firstAndLast("bench") ); // ["bcehn", "nhecb"]
console.log( firstAndLast("scoop") ); // ["coops", "spooc"]



console.log("132 --->")
// 132 ==>	Recursion: Reverse a String
// 	Write a function that reverses a string. Make your function recursive.
// 		reverse("hello") ➞ "olleh"
// 		reverse("world") ➞ "dlrow"
// 		reverse("a") ➞ "a"
// 		reverse("") ➞ ""
// 	For non-base cases, your function must call itself at least once.
// 	Check the Resources tab for info on recursion.
function reverse(str){
    if (str.length == 0) {
        return str;
    }
    else {
        return str.slice(-1) + reverse(str.slice(0, -1))
    }
}
console.log(reverse("hello")) // "olleh"
console.log(reverse("world")) // "dlrow"
console.log(reverse("a")) // "a"
console.log(reverse("")) // ""