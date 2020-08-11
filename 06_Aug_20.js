// 21 ==> Profitable Gamble  ---------------------------------
//     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
function profitableGamble(prob, prize, pay) {
	return (prob * prize) - pay > 0;
}

// console.log(profitableGamble(0.2, 50, 9) ) //true
// console.log(profitableGamble(0.9, 1, 2) ) //false
// console.log(profitableGamble(0.9, 3, 2) ) //true
//A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.



// 22 ==> Frames Per Second -------------------
//     Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(minutes, fps) {
	return minutes * 60 * fps;
}
// console.log( frames(1, 1) ); // 60
// console.log( frames(10, 1) ); // 600
// console.log( frames(10, 25) ); // 15000
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
// Assume the screen produces 60 frames every second.



// 23 ==> Drinks Allowed?   ------------------------------
//     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
function shouldServeDrinks(age, breakArg) {
	return 18 <= age && !breakArg;
}
// console.log( shouldServeDrinks(17, true) ); // false
// console.log( shouldServeDrinks(19, false) ); // true
// console.log( shouldServeDrinks(30, true) ); // false
// Return true or false.
// Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.




// 24 ==> Is the String Empty? ----------------------------
//     Create a function that returns true if a string is empty and false otherwise.
function isEmpty(str) {
	return !str;
	// return str == "";
}
// console.log( isEmpty("") ); // true
// console.log( isEmpty(" ") ); // false
// console.log( isEmpty("a") ); // false
// A string containing only whitespaces " " does not count as empty.



// 25 ==> Compare Strings by Count of Characters  -----------------------------
//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
	return str1.length == str2.length;
}
// console.log( comp("AB", "CD") ); // true
// console.log( comp("ABC", "DE") ); // false
// console.log( comp("hello", "moien khan") ); // false



// 26 ==> Multiple of 100 --------------------------
//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
function divisible(num) {
	return !(num % 100);
	// return num % 100 == 0;
}
// console.log( divisible(1) ); // false
// console.log( divisible(1000) ); // true
// console.log( divisible(100) ); // true



// 27 ==> Check if an Integer is Divisible By Five  --------------------
function divisibleByFive(num) {
	return !(num % 5);
	// return num % 5 == 0;
}
// console.log( divisibleByFive(5) ); // true
// console.log( divisibleByFive(-55) ); // true
// console.log( divisibleByFive(37) ); // false



// 28 ==> Recursion: Length of a String ------------------------------------
//     Write a function that returns the length of a string. Make your function recursive.

function length(str) {
	// debugger;
	if (str == '') {
		return 0;
	}
	else {
		return length( str.substring(1) ) + 1;
	}
}

// console.log( length("apple") ); // 5
console.log( length("make") ); // 4
// console.log( length("a") ); // 1
// console.log( length("") ); // 0



// 29 ==> Return a String as an Integer
//     Create a function that takes a string and returns it as an integer.
function stringInt(num) {
	return Number(num);
	// return +num;
	// return parseInt(num);
	// return parseInt(num, base); yes
}
stringInt("6") // 6
stringInt("1000") // 1000
stringInt("12") // 12
// All numbers will be whole numbers.


// 30 ==> Divides Evenly  ---------------
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(num1, num2) {
	return num1 % num2 == 0;
}

// console.log( dividesEvenly(98, 7)); // true
// # 98/7 = 14
// console.log( dividesEvenly(85, 4)); // false
// # 85/4 = 21.25
// a will always be greater than or equal to b.







//how to work .lenght on string variable
//find edge
//how to work recursion Q28.