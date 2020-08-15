// 105 ==>	Reverse the Order of a String
// 	Create a function that takes a string as its argument and returns the string in reversed order.
function reverse(str) {
	return Array.from(str).reverse().join('');
	
	// let dummy = '';
	// for (var i = str.length - 1; i >= 0; i--) {
	// 	dummy += str[i];
	// }
	// return dummy;

}
// console.log( reverse("Hello World") ); // "dlroW olleH"
// console.log( reverse("The quick brown fox.") ); // ".xof nworb kciuq ehT"
// console.log( reverse("Edabit is really helpful!") ); // "!lufpleh yllaer si tibadE"



// 106 ==>	Does the Object Contain a Given Key?
// 	Write a function that returns true if a hash contains the specified key, and false otherwise.
function hasKey(obj, keyToFind) {
	// for( key in obj ) {
	// 	if (key == keyToFind) {
	// 		return true;
	// 	}
	// }
	// return false;

	// return keyToFind in obj;   **

	// return !!obj[keyToFind];

	// return obj.hasOwnProperty(keyToFind);

	// return Object.keys(obj).includes(keyToFind)

	// return obj[keyToFind] ? true : false;

	return obj?.[keyToFind] ? true : false;  //optional chaning

}
// console.log( hasKey({ a: 44, b: 45, c: 46 }, "d") ); // false
// console.log( hasKey({ craves: true, midnight: true, snack: true }, "morning") ); // false
// console.log( hasKey({ pot: 1, tot: 2, not: 3, xyz: null }, "not") ); // true




// 107 ==>	Strange Pair
// 	A pair of strings form a strange pair if both of the following are true:
// 		The 1st string's first letter = 2nd string's last letter.
// 		The 1st string's last letter = 2nd string's first letter.
// 	Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(str1, str2) {
	// return str1.substr(0, 1) == str2.substr(-1) && str1.substr(-1) == str2.substr(0, 1);

	// return str1[0] == str2[str2.length-1] && str1[str1.length-1] == str2[0];

	// return str2.endsWith(str1.charAt(0)) && str1.endsWith(str2.charAt(0))
}
// console.log( isStrangePair("ratio", "orator") ); // true
// // "ratio" ends with "o" and "orator" starts with "o".
// // "ratio" starts with "r" and "orator" ends with "r".
// console.log( isStrangePair("sparkling", "groups") ); // true
// console.log( isStrangePair("bush", "hubris") ); // false
// console.log( isStrangePair("", "") ); // true




// 108 ==>	Typing Game	
// 	You're in the midst of creating a typing game.
// 	Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
		// Inputs:
		// 	User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
		// 	Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
		// Output: [1, 1, -1, -1, 1]



let userType = ["cat", "blue", "skt", "umbrells", "paddy"]
let correctArray = ["cat", "blue", "sky", "umbrella", "paddy"]

// console.log( userType.map((ele, i)=> ele == correctArray[i] ? 1 : -1) );





// 109 ==>	Repeat the Same Item Multiple Times
// 	Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
function repeat_2(item, times) {
	// let newArr = [];
	// for (var i = 1; i <= times; i++) {
	// 	newArr.push(item);
	// }
	// return newArr;

	// let x = String(item+'___').repeat(times).split("___")
	// x.pop()
	// return x;

	return String(item+'___').repeat(times).split("___").slice(0, -1)   //  * slice use on array *

	// let y = String(item+'___').repeat(times).split("___")
	// y.splice(-1);
	// return y;
}
console.log( repeat_2("edabit", 3) ); // ["edabit", "edabit", "edabit"]
console.log( repeat_2(13, 5) ); // [13, 13, 13, 13, 13]
console.log( repeat_2("7", 2) ); // ["7", "7"]
console.log( repeat_2(0, 0) ); // []



function removeFirstLast(str) {
	return str.length < 3 ? str : str.slice(1, -1);
}

// 110 ==>	Remove the First and Last Characters
// 	Create a function that removes the first and last characters from a string.
// console.log( removeFirstLast("hello") ); // "ell"
// console.log( removeFirstLast("maybe") ); // "ayb"
// console.log( removeFirstLast("benefit") ); // "enefi"
// console.log( removeFirstLast("a") ); // "a"
	// If the string is 2 or fewer characters long, return the string itself (See Example #4).




// 111 ==>	Capture the Rook
// 	Write a function that returns true if two rooks can attack each other, and false otherwise.
function canCapture([pos1, pos2]) {
	return pos1[0] == pos2[0] || pos1[1] == pos2[1]
}
// console.log(canCapture(["A8", "E8"]) ); // true    //rook => hathi
// console.log(canCapture(["A1", "B2"]) ); // false
// console.log(canCapture(["H4", "H3"]) ); // true
// console.log(canCapture(["F5", "C8"]) ); // false
	// Assume no blocking pieces.
	// Two rooks can attack each other if they share the same row (letter) or column (number).






// 112 ==>	Palindrome?
// 	A palindrome is a word that is identical forward and backwards.
// 		mom
// 		racecar
// 		kayak
// 	Given a word, create a function that checks whether it is a palindrome.
function checkPalindrome(str) {
	// return str.split('').reverse().join('') == str;

	// return Array.from(str).reverse().join('') == str;

	return [...str].reverse().join('') == str;
}
// console.log( checkPalindrome("mom") ); // true
// console.log( checkPalindrome("scary") ); // false
// console.log( checkPalindrome("reviver") ); // true
// console.log( checkPalindrome("stressed") ); // false




// 113 ==>	Little Dictionary --------------------------- inplement {lakhs input in array}
function dictionary(str, dictionary) {
	str.toLowerCase()
	return dictionary.filter((ele)=> ele.toLowerCase().startsWith(str));

	// return dictionary.filter((ele)=> ele.indexOf(str) == 0 ? ele : "");
}
// Create a function that takes in an initial word and filters out an array which contains words that start with the same letters as the initial word.
// console.log( dictionary("bu", ["Button", "breakfast", "border"]) ); // ["button"]
// console.log( dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ); // ["triplet", "tries", trip"]
// console.log( dictionary("beau", ["pastry", "delicious", "name", "boring"]) ); // []
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.





// 114 ==>	Calculate the Profit
// 	You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.
function profit({costPrice, sellPrice, inventory}) {
	return Math.round( (sellPrice - costPrice) * inventory );
}
// console.log( profit({
// 	costPrice: 32.67,
// 	sellPrice: 45.00,
// 	inventory: 1200
// }) ); // 14796

// console.log( profit({
// 	costPrice: 225.89,
// 	sellPrice: 550.00,
// 	inventory: 100
// }) ); // 32411

// console.log( profit({
// 	costPrice: 2.77,
// 	sellPrice: 7.95,
// 	inventory: 8500
// }) ); // 44030
	// Assume all inventory has been sold.
	// Profit = Total Sales - Total Cost






// 115 ==>	Reverse and Capitalize
// 	Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
function reverseCapitalize(str) {
	// return Array.from(str).reverse().join('').toUpperCase();

	// return [...str].reverse().join('').toUpperCase();

	return str.split('').reverse().join('').toUpperCase();
}

// console.log(reverseCapitalize("abc") ); // "CBA"
// console.log(reverseCapitalize("hellothere") ); // "EREHTOLLEH"
// console.log(reverseCapitalize("input") ); // "TUPNI"






// 116 ==>	Exists a Number Higher?
// 	Write a function that returns true if there exists at least one number that is larger than or equal to n.
function existsHigher(arr, num) {
	// return arr.some(ele=> ele >= num);

	// for (var i = 0; i < arr.length; i++) {
	// 	if (arr[i] >= num) {
	// 		return true;
	// 	}
	// }
	// return false;

	return Math.max(...arr) >= num;
}
console.log( existsHigher([5, 3, 15, 22, 4], 10) ); // true
console.log( existsHigher([1, 2, 3, 4, 5], 8) ); // false
console.log( existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ); // true
console.log( existsHigher([], 5) ); // false