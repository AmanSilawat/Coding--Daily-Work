// 72 ==>	Nth Star Number
// 	Create a function that takes a positive integer and returns the nth "star number".
// 	A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
function starNumber(num) {
	
}
console.log( starNumber(2) ); // 13
console.log( starNumber(3) ); // 37
console.log( starNumber(5) ); // 121




// 73 ==>	Lowercase, Uppercase or Mixed?
// 	Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
function getCase(str) {
	// if (str.toLowerCase() == str) {
	// 	return "lower";
	// }
	// else if (str.toUpperCase() == str) {
	// 	return "upper";
	// }
	// return "mixed";

	return ( str.toLowerCase() == str ? "lower" : str.toUpperCase() == str ? "upper" : "mixed" );
}
// console.log( getCase("whisper...") ); //"lower"
// console.log( getCase("SHOUT!") ); //"upper"
// console.log( getCase("Indoor Voice") ); //"mixed"



// 74 ==>	ES6: Destructuring Arrays
// 	You can assign variables from nested arrays like this:
const arr = ["cars", "planes", ["trains", ["motorcycles", "sssss"]]]
// let [trans1, trans2, [trans3,[trans4] ] ] = arr;

let [trans1, trans2, trans3, trans4 ] = arr.flat(Infinity);  //flat() accept number, Infinity

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"
	// With ES6, you can assign variables from arrays in a much more succint way. Use Array Destructuring to assign variables


// 75 ==>	The 3 Programmers Problem
// 	You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

function programmers(...pay) {
	return Math.max(...pay) - Math.min(...pay);
}
console.log( programmers(147, 33, 526) );// 493
console.log( programmers(33, 72, 74) );// 41
console.log( programmers(1, 5, 9) );// 8



// 76 ==>	Get the Sum of All Array Elements
// 	Create a function that takes an array and returns the sum of all numbers in the array.
function getSumOfItems(arr) {
	let arr2 = (arr) => eval(arr.join("+"))  // bad way
	return arr2(arr);
	// return arr.reduce( (tot, ele) => tot + ele );
	// return arr.reduce( (tot, ele) => tot + ele );

	// let sum = 0;
	// arr.forEach( (ele) => {
	// 	sum += ele;
	// })
	// return sum
}
// console.log( getSumOfItems([2, 7, 4]) );// 13
// console.log( getSumOfItems([45, 3, 0]) );// 48
// console.log( getSumOfItems([-2, 84, 23]) );// 105



// 77 ==>	Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.
function spaceMeOut(str) {
	// return Array.from(str).join(" ");

	// return str.split("").join(' ');

	return [...str].join(' ');
	
}
// console.log(spaceMeOut("space") );// "s p a c e"
// console.log(spaceMeOut("far out") );// "f a r  o u t"
// console.log(spaceMeOut("elongated musk") );// "e l o n g a t e d   m u s k"



// 78 ==>	Raucous Applause
// 	After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound. An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps). Given a string of what the overlapping claps sounded like, return how many claps were made in total.
function countClaps(claps) {
	return claps.split("C").length - 1;
}
// console.log(countClaps("ClaClaClaClap!") );// 4
// console.log(countClaps("ClClClaClaClaClap!") );// 6
// console.log(countClaps("CCClaClClap!Clap!ClClClap!") );// 9



// 79 ==>	Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
function filterArray(arr) {
	return arr.filter((ele) => typeof ele == "number");
}
// console.log( filterArray([1, 2, 3, "a", "b", 4]) ); // [1, 2, 3, 4]
// console.log( filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]) ); // [0, 1729]
// console.log( filterArray(["Nothing", "here"]) ); // []



// 80 ==>	Summing the Squares
// Create a function where given the number n, return the sum of all square numbers up to and including n.
function squaresSum(num) {
	return num ** 2 + ( num >= 1 ? squaresSum(num-1) : 0 ) ;
}
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14 
console.log( squaresSum(3) ); // 14
console.log( squaresSum(12) ); // 650
console.log( squaresSum(13) ); // 819



// 81 ==>	Check if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
function isInRange(num, range) {
	return num >= range.min && num <= range.max;
}
console.log( isInRange(4, { min: 0, max: 5 }) ); // true
console.log( isInRange(4, { min: 4, max: 5 }) ); // true
console.log( isInRange(4, { min: 6, max: 10 }) ); // false
// isInRange(5, { min: 5, max: 5 }) ➞ true
// Numbers can be positive or negative, and they may not be integers.
// You can assume min <= max is always true.



// 82 ==>	Coding Website Score Calculator
// Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points. Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.
function scoreCalculator(easy, medium, hard) {
	return easy < 0 || medium < 0 || hard < 0 ? "invalid" : (easy * 5) + (medium * 10) + (hard * 20);
}
console.log(scoreCalculator(1, 2, 3) );// 85
console.log(scoreCalculator(1, 0, 10) );// 205
console.log(scoreCalculator(5, 2, -6) );// "invalid"