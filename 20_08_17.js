// 133 ==>	Even Odd Partition
// 	Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:
// 		[[evens], [odds]]
function evenOddPartition(arr) {
	// PATTERN 1-----
	// let even = [];
	// let odd = [];
	// for (var i = 0; i < arr.length; i++) {
	// 	if (arr[i] % 2 == 0) {
	// 		even.push(arr[i])
	// 	}
	// 	else{
	// 		odd.push(arr[i])
	// 	}
	// }
	// return [even, odd];

	// PATTERN 2-----
	// let res = [[],[]];
	// arr.forEach(ele=> (ele % 2 == 0) ? res[0].push(ele) : res[1].push(ele) )
	// return res

	// PATTERN 3-----
	return [ arr.filter((ele)=> ele % 2 == 0), arr.filter((ele)=> ele % 2 == 1) ];
}
// console.log(evenOddPartition([5, 8, 9, 2, 0]) ); // [[8, 2, 0], [5, 9]]
// console.log(evenOddPartition([1, 0, 1, 0, 1, 0]) ); // [[0, 0, 0], [1, 1, 1]]
// console.log(evenOddPartition([1, 3, 5, 7, 9]) ); // [[], [1, 3, 5, 7, 9]]
// console.log(evenOddPartition([]) ); // [[], []]
	// Keep the same relative ordering as the original array.




// 134 ==>	Leap Years
// 	A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:
// 		A year must either be divisible by 400 or divisible by 4 and not 100.
// 	Given a year you must implement a function that returns true if it's a leap year, or false if it's not.

// It can't be exactly divided by 400 or by 4.
// Exactly divided can be interpreted as the remainder of the division is equal to 0.
// Try to implement this function writing a single line of code.

function isLeap(year) {
	return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
}

console.log( isLeap(2020) ); // true
// Exactly divided by 4 and not by 100.
console.log( isLeap(1800) ); // false
// Exactly divided by 4, but is also exactly divided by 100.
console.log( isLeap(2000) ); // true
// Exactly divided by 400.
console.log( isLeap(2019) ); // false



// 135 ==>	Drink Sorting
// 	You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.
// 	Assume that the following array of drink objects needs to be sorted:
// 		drinks = [
// 			{name: "lemonade", price: 50},
// 			{name: "lime", price: 10}
// 		]
// 	The output of the sorted drinks object will be:
// 		sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinkByPrice(drinksObj) {
	return drinksObj.sort((ele1, ele2)=> ele1.price - ele2.price);
}

let drinks = [
	{name: "lemonade", price: 50},
	{name: "lime", price: 10},
	{name: "lime", price: 15}
]
console.log( sortDrinkByPrice(drinks) ); // [{name: "lime", price: 10}, {name: "lemonade", price: 50}]




// 136 ==>	Characters in Shapes
// 	Create a function that counts how many characters make up a rectangular shape. You will be given a array of strings.
function countCharacters(arr) {
	// let totNumOfStr = 0;
	// for (var i = 0; i < arr.length; i++) {
	// 	if (arr[i].length != arr[0].length) {
	// 		return false;
	// 	}
	// 	totNumOfStr += arr[i].length;
	// }
	// return totNumOfStr;

}


console.log( countCharacters([
	"###",
	"###",
	"###"
]) ); // 9
console.log( countCharacters([
	"22222222",
	"22222222",
]) ); // 16
console.log( countCharacters([
	"------------------"
]) ); // 18
console.log( countCharacters([]) );// 0
console.log( countCharacters([ "", ""]) );// 0




// 137 ==>	FizzBuzz Interview Question
// 	Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
// 		- If the number is a multiple of 3 the output should be "Fizz".
// 		- If the number given is a multiple of 5, the output should be "Buzz".
// 		- If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
// 		- If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
// 		- The output should always be a string even if it is not a multiple of 3 or 5.
function FizzBuzz(num) {
	// return num % 3 == 0 && num % 5 != 0 ? "Fizz" : ''
	// return num % 3 == 0 && num % 5 == 0 ? "FizzBuzz" : num % 3 == 0 ? 'Fizz' : num % 5 == 0 ? 'Buzz' : num;

	return (num % 3 ? "" : 'Fizz') + (num % 5 ? "" : 'Buzz') || String(num)
}
console.log(FizzBuzz(3) ); // "Fizz"
console.log(FizzBuzz(5) ); // "Buzz"
console.log(FizzBuzz(15) ); // "FizzBuzz"
console.log(FizzBuzz(4) ); // "4"



// 138 ==>	Return Only the Integer
// 	Write a function that takes an array of elements and returns only the integers.
function returnOnlyInteger(arr) {
	return arr.filter(ele => Number.isInteger(ele) );
}
console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ); // [9, 2, 16]
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ); // [81, 123]
console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ); // [10, 56, 20, 3]
console.log(returnOnlyInteger(["String",  true,  3.3,  1]) ); // [1]