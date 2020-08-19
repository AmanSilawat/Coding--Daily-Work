// 146 ==>	Return the Highest and Lowest Numbers
// 	Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
// 		- All numbers are valid Int32, no need to validate them.
// 		- There will always be at least one number in the input string.
// 		- Output string must be two numbers separated by a single space, and highest number is first.
function highLow(str) {
	// let arr = str.split(' ');
	// return `${ Math.max(...arr)} ${Math.min(...arr) }`;
}
// console.log( highLow("1 2 3 4 5") ); // "5 1"
// console.log( highLow("1 2 -3 4 5") ); // "5 -3"
// console.log( highLow("1 9 3 4 -5") ); // "9 -5"
// console.log( highLow("13") ); // "13 13"




// 147 ==>	Purge and Organize
// 	Given an array of numbers, write a function that returns an array that...
// 		Has all duplicate elements removed.
// 		Is sorted from least to greatest value.
function uniqueSort(arr) {
	// let uniqeArr = [];
	// for (var i = 0; i < arr.length; i++) {
	// 	if ( !uniqeArr.includes(arr[i]) ) {
	// 		uniqeArr.push(arr[i]);
	// 	}
	// }
	// return uniqeArr.sort();

	// let uniqeArr = [];
	// return arr.sort().filter( ele=> !uniqeArr.includes(ele) ? uniqeArr.push(ele) : "" );

	// return  Array.from( new Set(arr) ).sort();
	return   [...new Set(arr)].sort();

	// "string".split('')
	// Array.from()
	// [...]
	
}
// console.log( uniqueSort([1, 2, 4, 3]) ); // [1, 2, 3, 4]
// console.log( uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ); // [1, 2, 3, 4]
// console.log( uniqueSort([6, 7, 3, 2, 1]) ); // [1, 2, 3, 6, 7]




// 148 ==>	Something in the Box?
// 	Create a function that returns true if an asterisk * is inside a box.
	//...
	// The asterisk may be in the array, however, it must be inside the box, if it exists.
function inBox(arr) {
	// if (arr[0].split('').includes('*') || arr[arr.length-1].split('').includes('*')) {
	// 	return false;
	// }
	// else {
	// 	arr.shift();
	// 	arr.pop();
	// 	// return  )

	// 	// return arr.some( ele=> ele.slice(1, -1).includes('*') )

	// 	for (var i = 0; i < arr.length; i++) {
	// 		if ( arr[i].slice(1, -1).includes('*') ) {
	// 			return true;
	// 		}
	// 	}
	// }
	// return false;

	// if (!arr[0].split('').includes('*') || !arr[arr.length-1].split('').includes('*')) {
	// 	return arr.some( ele=> ele.slice(1, -1).includes('*') )
	// }
	// else{
	// 	return false;
	// }

	arr.shift();
	arr.pop();
	return arr.some( ele=> ele.slice(1, -1).includes('*') );

	//R.O.I  => region of interest

}

// console.log( inBox([
// 	"###",
// 	"#*#",
// 	"###"
// ]) ); // true

// console.log( inBox([
// 	"####",
// 	"#* #",
// 	"#  #",
// 	"####"
// ]) ); // true

// console.log( inBox([
// 	"*####",
// 	"# #",
// 	"#  #*",
// 	"####"
// ]) ); // false

// console.log( inBox([
// 	"#####",
// 	"#   #",
// 	"#   #",
// 	"#   #",
// 	"#####"
// ]) ); // false


// console.log( inBox([
// 	"#####",
// 	"#   #",
// 	"#   #",
// 	"# * #",
// 	"#####"
// ]) ); // true

// console.log( inBox([
// 	"#####",
// 	"#   #",
// 	"# * #",
// 	"#   #",
// 	"#####"
// ]) ); // true


// console.log( inBox([
// 	"#####",
// 	"#  *#",
// 	"#   #",
// 	"#   #",
// 	"#####"
// ]) ); // true




// 149 ==>	Find the Missing Number
// 	Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
	// The array of numbers will be unsorted (not in order).
	// Only one number will be missing.
function missingNum(arr) {
	// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// let res = 0;
	// res =  newArr.filter(ele=> !arr.includes(ele) )
	// return Number(res)

	return 55 - arr.reduce( (total, ele) => total + ele );
}
// console.log( missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ); // 5
// console.log( missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ); // 10
// console.log( missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ); // 7




// 150 ==>	Reverse the Order of Words with Five Letters or More
// 	Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function reverse(str) {
	return str.split(' ').map( ele => ele.length >= 5 ? ele.split('').reverse().join('') : ele ).join(' ');
}
// console.log( reverse("Reverse") ); // "esreveR"
// console.log( reverse("This is a typical sentence.") ); // "This is a lacipyt .ecnetnes"
// console.log( reverse("The dog is big.") ); // "The dog is big."




// 151 ==> Remove Surrounding Duplicate Items
// 	Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.
	// The initial sequence of items can be either a string or an array.
	// Tests are case sensitive.
function uniqueInOrder(removeDup) {
	return Array.from(removeDup).filter( (value, index, array) => value != array[index-1])
}
// console.log( uniqueInOrder("AAAABBBCCDAABBB") ); // ["A", "B", "C", "D", "A", "B"]
// console.log( uniqueInOrder("ABBCcAD") ); // ["A", "B", "C", "c", "A", "D"]
// console.log( uniqueInOrder([1, 2, 2, 3, 3]) ); // [1, 2, 3]




// 152 ==>	The Museum of Incredibly DULL Things
// 	A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed. Create a function that takes an array of integers and removes the smallest value.
// 		Don't change the order of the left over items.
// 		If you get an empty array, return an empty array: [] ➞ [].
// 		If there are multiple items with the same value, remove item with lower index (3rd example).

function museumIncredibly(arr) {
	let min = Math.min(...arr)
	arr.splice(arr.indexOf(min), 1)
	return arr
	
}
// console.log( museumIncredibly([1, 3, 8, 4, 2, 7]) )
// console.log( museumIncredibly([1, 3, 3, 8, 8, 2, 7]) )
// console.log( museumIncredibly([]) )





// 153 ==>	Word Builder
// 	In this challenge, you have to build a word from the scrambled letters contained in the first given array. For establishing how to assign the spots to the letters, you will use the positions contained in the second given array.
// 		letters = ["e", "t", "s", "t"]
// 		positions = [1, 3, 2, 0]
// 		Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
// 		Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
// 		Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
// 		Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
// 	Given the two arrays letters (containing the scrambled letters of the word) and positions (containing the indexes of the letters), implement a function that returns the resulting word as a string.
function wordBuilder(letters, positions) {
	let emptyArr = [];
	letters.map( (value, index, array) => {
		emptyArr[ positions[index] ] = value
	});
	return emptyArr.join('');

}
// console.log( wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]) ); // "test"
// console.log( wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]) ); // "edabit"
// console.log( wordBuilder(["g", "e", "o"], [1, 0, 2]) ); // "ego"




// 154 ==>	Playing RisiKo!
// 	In a game of RisiKo! (the Italian version of the popular board game Risk!), the players throw six-sided dice to conquer territories around a World map. When two players contend a territory there is a battle, and they throw from 1 up to 3 dice, with each die being an army sent to fight. To establish who loses armies after the battle, the dice are compared starting from the highest value, and proceeding with the comparisons in descending order (eliminating the dice in excess if the amount of thrown dice among the two players is different). When the rolls are compared, for each comparison the die of the attacking player must have a greater value than the defender's die to win the fight. In the case of a tie, the defender wins the single fight. Given two arrays att (rolls of the attacker) and def (rolls of the defender), implement a function that returns the armies lost by the defender as an integer.
// 		When two compared dice have the same value, the player who defends wins the fight (see example #2).
// 		When the number of rolls is different among the two players, the comparisons to do are equals to the lowest amount of rolled dice (see examples #2 and #3).
// 		You can expect only valid inputs: each array will have at least a die, and no more than three dice, with values in the range from 1 to 6.


function risiko(att, def) {
	// att.sort((a, b) => b-a);
	// def.sort((a, b) => b-a);

	// let len = Math.abs( att.length - def.length );

	// att.length > def.length ? att.splice(def.length, len) : def.splice(att.length, len)


	// let points = 0;

	// att.forEach( (val, i) => val > def[i] ? points++ : '');
	// return points;

	[att, def].forEach( val => val.sort().reverse() );
	return att.filter( (val, index) => val > def[index] ).length;
}
console.log( risiko([3, 6, 4], [2, 5, 3]) ); // 3
// Comparison 1:
// ATT(6) vs. DEF(5): DEF loses an army
// Comparison 2:
// ATT(4) vs. DEF(3): DEF loses an army
// Comparison 3:
// ATT(3) vs. DEF(2): DEF loses an army

console.log( risiko([3, 6], [6, 4, 4]) ); // 0
// // // Comparison 1:
// // // ATT(6) vs. DEF(6): ATT loses an army
// // // Comparison 2:
// // // ATT(3) vs. DEF(4): ATT loses an army

console.log( risiko([3, 1], [1]) ); // 1
// // // Comparison 1:
// // // ATT(3) vs. DEF(1): DEF loses an army
console.log( risiko([3, 6], [6, 4, 4, 5]) ); // 0