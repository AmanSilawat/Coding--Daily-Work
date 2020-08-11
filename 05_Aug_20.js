// 11 ==> Correct the Mistakes ------------
function squared(a) {
	return a*a;
	// Math.pow(a, 2);
	// a ** 2 
}

// console.log( squared(5) ) // 25
// console.log( squared(9) ) // 81
// console.log( squared(100) ) // 10000


/* 12 ==> Using the "&&" Operator ----------
    JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
    Consider a && b:
        a is checked if it is true or false.
        If a is false, false is returned.
        b is checked if it is true or false.
        If b is false, false is returned.
        Otherwise, true is returned (as both a and b are therefore true ).
    The && operator will only return true for true && true.
    Make a function using the && operator.
*/

function and(condition1, condition2) {
	if (condition1 && condition2) {
		return true;
	}
	else {
		return false;
	}
	// return (x && y) //true  other wise false

}
// console.log( and(true, false) ) // false
// console.log( and(true, true) ) // true
// console.log( and(false, true) ) // false
// console.log( and(false, false) ) // false


// 13 ==> Is the Number Less than or Equal to Zero? --------------
//     Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
	return Number(num) <= 0;
}
// console.log( lessThanOrEqualToZero(5) ) // false
// console.log( lessThanOrEqualToZero(0) ) // true
// console.log( lessThanOrEqualToZero(-2) ) // true


// 14 ==> Less Than 100?  ----------------------
//     Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
	// let tot = Number(num1) + Number(num2);
	// if (tot < 100) {
	// 	return true;
	// }
	// else {
	// 	return false;
	// }

	return ( (Number(num1) + Number(num2) ) < 100);

}
// console.log( lessThan100(22, 15)); // true 
// 22 + 15 = 37
// console.log( lessThan100(83, 34)); // false
// 83 + 34 = 117


// 15 ==> Football Points ---------------------
//     Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.
function footballPoints(win, draw, lose) {
	return (win * 3) + (draw * 1) + (lose);
	//return (win * 3) + (draw * 1);
}
// console.log( footballPoints(3, 4, 2)); // 13
// console.log( footballPoints(5, 0, 2)); // 15
// console.log( footballPoints(0, 0, 1)); // 0


// 16 ==> Are the Numbers Equal? ----------------
//     Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
	if (num1 === num2) { return true }
	else { return false; }
}
// console.log(isSameNum(4, 8)); //false
// console.log(isSameNum(2, 2) ); //true
// console.log(isSameNum(2, "2")); //false
// console.log(isSameNum(0, -0)); //true  


// 17 ==> Minimal I: If Boolean Then Boolean ------------
function isEven(n) {
	return n % 2 == 0; 
}

// console.log( isEven(1) )


// 18 ==> The Farm Problem  -----------------
//     In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//         chickens = 2 legs
//         cows = 4 legs
//         pigs = 4 legs
//     The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
	//return (chickens * 2) + ( (cows + pigs) * 4);
}
// console.log( animals(2, 3, 5) ); // 36
// console.log( animals(1, 2, 3) ); // 22
// console.log( animals(5, 2, 8) ); // 50
    // Remember that the farmer wants to know the total number of legs and not the total number of animals.


// 19 ==> Convert Hours and Minutes into Seconds ------------------
//     Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert(hours, minutes) {
	return (hours * 60 * 60) + (minutes * 60);
	//return ((hours*60) + minutes) * 60


}
// console.log(convert(1, 3)) // 3780
// console.log(convert(2, 0)) // 7200
// console.log(convert(0, 0)) // 0



// 20 ==> Equality Check  --------------
//     In this challenge, you must verify the equality of two different given parameters: a and b.
//     Both the value and the type of parameters need to be tested in order to have a matching equality. The possible types of the given parameters are:
//         Numbers
//         Strings
//         Booleans (false or true)
//         Special values: undefined, null and NaN

function checkEquality(type1, type2) {
	// if (type1 === type2) {
	// 	return true;
	// }
	// else {
	// 	return false;
	// }

	// return type1 === type2  //true
	return Object.is(type1, type2);
	// this methos work same agents ===
	// but diffrent only -0, 0 are unique valuse
}
console.log(checkEquality(1, true)); // false
// A number and a boolean: their type is different
console.log(checkEquality(0, "0")); // false
// A number and a string: their type is different
console.log(checkEquality(1,  1)); // true 
console.log(checkEquality(0,  -0)); // true 
// A number and a number: their type and value are equal


// ---------------------------------------------------------------------------
/*
Data Structure Asymptotic Notation
	*Best Case: In which we analyse the performance of an algorithm for the input, for which the algorithm takes less time or space.
	*Worst Case: In which we analyse the performance of an algorithm for the input, for which the algorithm takes long time or space.
	*Average Case: In which we analyse the performance of an algorithm for the input, for which the algorithm takes time or space that lies between best and worst case.


1. Big-O Notation (Ο) – Big O notation specifically describes worst case scenario.
   Big-Oh ==> O(n), O(n log n), O(n^2)

2. Omega Notation (Ω) – Omega(Ω) notation specifically describes best case scenario.
3. Theta Notation (θ) – This notation represents the average complexity of an algorithm.

4. 
Insertion Sort

https://www.geeksforgeeks.org/insertion-sort/


*/