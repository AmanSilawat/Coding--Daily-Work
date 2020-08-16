// 83 ==>	Sum of the Odd Numbers
// Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

function addOddToN(num) {
	let sum = 0;
	for (var i = 1; i <= num; i++) {
		if (i % 2 != 0) {
			sum += i;
		}
	}
	return sum;
	
	// -------------------------  recursive TYPE Ones
	if (n <= 1){ return 1; }
	else{
		if(n%2 === 0){
			return addOddToN(n - 1);
		}
		else {
			return n + addOddToN(n - 1);
		}
	}

	// -------------------------  recursive	TYPE TWO
	// return (n <= 1) ? 1 : (n%2 === 0) ? addOddToN(n - 1) : n + addOddToN(n - 1);

}
// console.log( addOddToN(5) ); // 9
// // 1 + 3 + 5 = 9
// console.log( addOddToN(13) ); // 49
// console.log( addOddToN(47) ); // 576



// 84 ==>	Halloween Day
// Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
function halloween(date) {
	// let newDate = new Date(date);
	// if ( ( newDate.getMonth()+1 ) == 10 && newDate.getDate() == 31) {
	// 	return "Bonfire toffee";
	// }
	// return "toffee";


	// let [year, month, day] = date.split('/')
	// if (month == 10 && day == 31) {
	// 	return "Bonfire toffee";
	// }
	// return "toffee";

	// var dummy = str.split("/");   ----------------
	// return ( dummy[1]  )

}
// console.log( halloween("2013/10/31") ); // "Bonfire toffee"
// console.log( halloween("2012/07/31") ); // "toffee"
// console.log( halloween("2011/10/12") ); // "toffee"




// 85 ==>	Simple OOP Calculator    
// Create functions for the Calculator class that can do the following:
// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

// $$ TYPE ONE $$  ---------------------
// function Calculator() {
// 	const newCalc = Object.create(calcObj);
// 	return newCalc;
// }

// const calcObj = {
// 	add: function (num1, num2) { return num1 + num2	},
// 	subtract: function (num1, num2) { return num1 - num2},
// 	multiply: function (num1, num2) { return num1 * num2},
// 	divide: function (num1, num2) { return num1 / num2}
// }


// $$ TYPE TWO $$  ---------------------
// function Calculator() {
// }

// Calculator.prototype.add = function (num1, num2) { return num1 + num2},
// Calculator.prototype.subtract = function (num1, num2) { return num1 - num2},
// Calculator.prototype.multiply = function (num1, num2) { return num1 * num2},
// Calculator.prototype.divide = function (num1, num2) { return num1 / num2}

// var calculator = new Calculator()
// console.log( calculator.add(10, 5) ); // 15
// console.log( calculator.subtract(10, 5) ); // 5
// console.log( calculator.multiply(10, 5) ); // 50
// console.log( calculator.divide(10, 5) ); // 2



// $$ TYPE THREE $$  ---------------------
class Calculator {
	add(num1, num2) { return num1 + num2}
	subtract(num1, num2) { return num1 - num2}
	multiply(num1, num2) { return num1 * num2}
	divide(num1, num2) { return num1 / num2}
}


var calculator = new Calculator()
console.log( calculator.add(10, 5) ); // 15
console.log( calculator.subtract(10, 5) ); // 5
console.log( calculator.multiply(10, 5) ); // 50
console.log( calculator.divide(10, 5) ); // 2




// 86 ==>	Limit a Number's Value
// Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.
function limitNumber(val, min, max) {
	// if (val >= min && val <= max) {
	// 	return val
	// }
	// else if (val <= min) {
	// 	return min;
	// }
	// else {
	// 	return max
	// }


	// return (val <= min) ? min : (val >= max) ? max : val;
}
// console.log( limitNumber(5, 1, 10) ); // 5
// console.log( limitNumber(-3, 1, 10) ); // 1
// console.log( limitNumber(14, 1, 10) ); // 10
// console.log( limitNumber(4.6, 1, 10) ); //4.6




// 87 ==>	Skip the Drinks with Too Much Sugar
// The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
// Drinks that contain too much sugar (in this challenge) are:
// Cola
// Fanta
function skipTooMuchSugarDrinks(arr) {
	return arr.filter(ele=>ele != "cola" && ele != "fanta");
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]) );// [water]
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]) );// []
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) );// ["lemonade", "beer", "water"]



// 88 ==>	Add a Consecutive List of Numbers
// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
function addUpTo(num) {
	let tot = 0;
	for (var i = 0; i <= num; i++) {
		tot += i;
	}
	return tot;
}
console.log(addUpTo(3) ); // 6
// 1 + 2 + 3 = 6
console.log(addUpTo(10) ); // 55
// 1 + 2 + 3 + ... + 10 = 55
console.log(addUpTo(7) ); // 28
// 1 + 2 + 3 + ... + 7 = 28





// 89 ==>	Check if String Ending Matches Second String
// 	Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
function checkEnding(str, match) {
	return str.endsWith(match)
}
// console.log( checkEnding("abc", "bc") ); // true
// console.log( checkEnding("abc", "d") ); // false
// console.log( checkEnding("samurai", "zi") ); // false
// console.log( checkEnding("feminine", "nine") ); // true
// console.log( checkEnding("convention", "tio") ); // false




// 90 ==> Find the Bug: Checking Even Numbers
// 	Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// 	Not a big deal, your friend says. He writes the following code:
function checkAllEven(arr) {
	return arr.every(x => x % 2 === 0)
}
// 	The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
// console.log( checkAllEven([1, 2, 3, 4]) );// false
// console.log( checkAllEven([2, 4, 6]) );// true
// console.log( checkAllEven([5, 6, 8, 10]) );// false
// console.log( checkAllEven([-2, 2, -2, 2]) );// true



// 91 ==>	Remove Null from an Array
// 	Create a function to remove all null values from an array.
function removeNull(arr) {
	return arr.filter(ele=> ele != null);
}
// console.log( removeNull(["a", null, "b", null]) ); // ["a", "b"]
// console.log( removeNull([null, null, null, null, null]) ); // []
// console.log( removeNull([7, 8, null, 9]) ); // [7, 8, 9]




// 92 ==>	True Ones, False Zeros
// 	Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
function integerBoolean(arr) {
	return arr.split('').map(ele=> Boolean(+ele))
}
console.log(integerBoolean("100101") ); //[true, false, false, true, false, true]
console.log(integerBoolean("10") ); //[true, false]
console.log(integerBoolean("001") ); //[false, false, true]




// 93 ==>	Modifying the Last Character
// 	Create a function which makes the last character of a string repeat n number of times.
function modifyLast(str, repetition) {
	return str + str.substr(-1).repeat(repetition-1);
}
console.log( modifyLast("Hello", 3) ); // "Hellooo"
console.log( modifyLast("hey", 6) ); // "heyyyyyy"
console.log( modifyLast("excuse me what?", 5) ); // "excuse me what?????"