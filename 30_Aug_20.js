// 171 ==>	Sort Words by a String
// Create a function that sorts words by a given string.
// The string may have excess letters (see examples #1 and #2). There will be unique starting letters in each array.
function sortByString(arr, str) {
	// pattern 1
	// let resArr = [];
	// for (var i = 0; i < str.length; i++) {
	// 	for (var j = 0; j < arr.length; j++) {
	// 		if (str[i] == arr[j][0]) {
	// 			resArr.push(arr[j])
	// 		}
	// 	}
	// }
	// return resArr;

	// pattern 2
	return arr.sort( ([a], [b])=> str.indexOf(a) - str.indexOf(b) );
}
// console.log( sortByString(["apple", "banana", "cherry", "date"], "dbca") ); // ["date", "banana", "cherry", "apple"]
// console.log( sortByString(["small", "big", "medium"], "sazymtb") ); // ["small", "medium", "big"]
// console.log( sortByString(["poof", "floof", "loop"], "flatp") ); // ["floof", "loop", "poof"]




// 172 ==>	Sort by Digit Length, then By Number Itself
// 	Write a function that sorts an array of integers by their digit length in descending order, then settles ties by sorting numbers with the same digit length in ascending order.
function digitSort(arr) {
	// pattern 1
	return arr.sort((a, b) => String(b).length - String(a).length == 0 ? a - b : String(b).length - String(a).length);

	// pattern 2
	return arr.sort((a, b)=> String(b).length - String(a).length || a-b)
}
console.log( digitSort([77, 23, 5, 7, 101]) ); // [101, 23, 77, 5, 7] 
console.log( digitSort([1, 5, 9, 2, 789, 563, 444]) ); // [444, 563, 789, 1, 2, 5, 9]
console.log( digitSort([53219, 3772, 564, 32, 1]) ); // [53219, 3772, 564, 32, 1]