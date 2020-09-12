// 41 ==> Fix the Error: Check Whether a Given Number Is Odd
//     I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.
function isOdd(num){
    return num % 2 != 0;
}
// console.log( isOdd(-5) ); // true
// console.log( isOdd(25) ); // true
// console.log( isOdd(0) ); // false



// 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.
function flipBool(bool) {
	return bool ? 0 : 1;
	// return !+bool;
}
// console.log( flipBool(true) ); // 0
// console.log( flipBool(false) ); // 1
// console.log( flipBool(1) ); // 0
// console.log( flipBool(0) ); // 1



// 43 ==> Kinetic Energ
//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2
//     m is mass in kg
//     v is velocity in m/s
//     kinetic energy in J
//     Return the Kinetic Energy in Joules, given the mass and velocity. round answers to the nearest integer.
function kineticEnergy(m, v) {
	return parseInt( 0.5 * m * (v**2) );
}
// console.log( kineticEnergy(60, 3) ); // 270
// console.log( kineticEnergy(45, 10) ); // 2250
// console.log( kineticEnergy(63.5, 7.35) ); // 1715



// 44 ==> Name Greeting!
//     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".
let helloName = (greet) => {
	return `Hello ${greet}!`
}
// console.log( helloName("Gerald") ); // "Hello Gerald!"
// console.log( helloName("Tiffany") ); // "Hello Tiffany!"
// console.log( helloName("Ed") ); // "Hello Ed!"



// 45 ==> To the Power of _____             $ RESOVE THIS RECURSION $  BEM Notation
//     Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(base, expo) {
	// return base ** expo;

	if (expo === 0) {
		return 1;
	}
	else {
		return (base * calculateExponent( base, expo-1 )) ;
	}
}
// console.log( calculateExponent(5, 5) ); // 3125
// console.log( calculateExponent(10, 10) ); // 10000000000
// console.log( calculateExponent(3, 3) ); // 27



// 46 ==> Word without First Character        $ TRY SHIFT or UNSHIFT $
//     Create a function that takes a word and returns the new word without including the first character.
function newWord(word) {
	// return word.slice(1);

	// return word.substring(1);  

	// return word.shift(1); //this working only for a array
}
// console.log( newWord("apple") ); // "pple"
// console.log( newWord("cherry") ); // "herry"
// console.log( newWord("plum") ); // "lum"



// 47 ==> Concatenating Two Integer Arrays      $ USING FOR LOOP $
//     Create a function to concatenate two integer arrays.
function concat(arr1, arr2) {
	// return arr1.concat(arr2);

	// return [...arr1, ...arr2];

	let concateArray = arr1;
	for (var i = 0; i < arr2.length; i++) {
		concateArray.push(arr2[i]);
	}
	return concateArray;

}
// console.log( concat([1, 3, 5], [2, 6, 8]) ); // [1, 3, 5, 2, 6, 8]
// console.log( concat([7, 8], [10, 9, 1, 1, 2]) ); // [7, 8, 10, 9, 1, 1, 2]
// console.log( concat([4, 5, 1], [3, 3, 3, 3, 3]) ); // [4, 5, 1, 3, 3, 3, 3, 3]



// 48 ==> Find the Index (Part 1)          $ USING FINDINDEX, LOOP $
//     Create a function that finds the index of a given item. If the item is not present, return -1.
function search(data, findVal) {
	// return data.indexOf(findVal);

	// return data.findIndex( (ele) => {
	// 	return ele === findVal;
	// } );

	for (var i = 0; i < data.length; i++) {
		if( data[i] === findVal ) { return i; }
	}
	return -1;
}
// console.log( search([1, 5, 3], 5) ); // 1
// console.log( search([9, 8, 3], 3) ); // 2
// console.log( search([1, 2, 3], 4) ); // -1
// console.log( search(["hi", "edabit", "fgh", "abc"], "fgh") ); // 2



// 49 ==> Number of Stickers  ?????????????????
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.
function howManyStickers(num) {
	return (num * num) * 6 ;
}
// console.log( howManyStickers(1) ); // 6
// console.log( howManyStickers(2) ); // 24
// console.log( howManyStickers(3) ); // 54



// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.
function check(data, val) {
	// for (var i = 0; i < data.length; i++) {
	// 	if (data[i] === val) {
	// 		return true;
	// 	}
	// }
	// return false;

	// return data.some((ele)=>{
	// 	return ele === val;
	// });

	// return data.includes(val);

	return data.indexOf(val);
}
// console.log( check([1, 2, 3, 4, 5], 3) ); // true
// console.log( check([1, 1, 2, 1, 1], 3) ); // false
// console.log( check([5, 5, 5, 6], 5) ); // true
// console.log( check([], 5) ); // false