// 162 ==>	Sort a String by Its Last Character
// 	Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.
	// Tests consist of lowercase alphabetic characters (a-z) and spaces.
	// If two words have the same last character, sort by the order they originally appeared.
function sortByLast(str) {
	//setp 1: convert string to array
	//setp 2: sort array based on last character
	//setp 3: return string
	return str.split(' ').sort((a,b)=> a[a.length-1] < b[b.length-1] ? -1 : 1 ).join(' ')

}
// console.log(sortByLast("herb camera dynamic") ); "camera herb dynamic"
// console.log(sortByLast("stab traction artist approach") ); "stab approach traction artist"
// console.log(sortByLast("sample partner autonomy swallow trend") ); "trend sample partner swallow autonomy"





// 163 ==>	Consecutive Numbers
// 	Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.
function cons(arr) {
	// arr.sort((a,b)=>a-b);
	// for (var i = 1; i < arr.length; i++) {
	// 	if (arr[i]-1 != arr[i-1]) {
	// 		return false
	// 	}
	// }
	// return true;
}
console.log(cons([5, 1, 4, 3, 2]) ); // true // Can be re-arranged to form [1, 2, 3, 4, 5]
console.log(cons([5, 1, 4, 3, 2, 8]) ); // false
console.log(cons([5, 6, 7, 8, 9, 9]) ); // false // 9 appears twice