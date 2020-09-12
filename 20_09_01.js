// 175 ==>	Mona's Sort
// Mona has created a method to sort an array in ascending order. Starting from the left of the array, she compares numbers by pairs. If the first pair is ordered [smaller number, larger number], she moves on. If the first pair is ordered [larger number, smaller number], she swaps the two integers before moving on to the next pair. She repeats this process until she reaches the end of the array. Then, she moves back to the beginning of the array and repeats this process until the entire array is sorted. If the unsorted array is: [3, 9, 7, 4], she will perform the following steps (note Swaps here refers to cumulative swaps):
// 	She starts with the first pair.
// 	[3, 9] is in order, move on. Array: [3, 9, 7, 4]. Swaps: 0.
// 	[9, 7] is not. Swap. Array: [3, 7, 9, 4]. Swaps: 1
// 	[9, 4] is not. Swap. Array: [3, 7, 4, 9]. Swaps: 2
// 	Check if array is sorted. It is not, so start over at first pair.
// 	[3, 7] is in order, move on. Array: [3, 7, 4, 9]. Swaps: 2
// 	[7, 4] is not. Swap. Array: [3, 4, 7, 9]. Swaps: 3.
// 	[7, 9] is in order, move on. Array: [3, 4, 7, 9]. Swaps: 3.
// 	Check if array is sorted. It is. End.
// Sorting the array [3, 9, 7, 4] takes her 3 swaps. Write a function that takes in an unsorted array and returns the number of swaps it takes for the array to be sorted according to Mona's algorithm.
function numberOfSwaps(arr) {
	let swepCount = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 1; j < arr.length; j++) {
			if (arr[j-1] > arr[j]) {
				// console.log( j-1, arr[j-1])
				// console.log( j, arr[j])

				let tmp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = tmp;
				// [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
				// console.log( [arr[j], arr[j-1]] )
				swepCount++;
			}
		}
	}
	return swepCount;
}
// console.log( numberOfSwaps([5, 4, 3]) ); // 3
// console.log( numberOfSwaps([1, 3, 4, 5]) ); // 0
// console.log( numberOfSwaps([5, 4, 3, 2]) ); // 6





// 176 ==> Encoded String Parse
// 	Create a function which takes in an encoded string and returns an object according to the following example:

//..

// The string will always be in the same format, first name, last name and id with zeros between them. id numbers will not contain any zeros. Try solving this without RegEx.
function parseCode(encodedStr) {
	// PATTERN 1
	// step 1: split the string with '0' and filter the array by removing all empty string
	// let [firstName, lastName, id] = encodedStr.split('0').filter(ele => ele != '');
	// return { firstName, lastName, id};
	// step 2: assign array element to object.
	// step 3: return the object.

	// PATTERN 2
	// let [firstName, lastName, id] = encodedStr.split('0').filter(String);
	// return { firstName, lastName, id};

	// PATTERN 3
	let [firstName, lastName, id] = encodedStr.split('0').filter(Boolean);
	return { firstName, lastName, id};
}
// console.log(parseCode("John000Doe000123"));
/*{
	firstName: "John",
	lastName: "Doe",
	id: "123"
} */
// console.log(parseCode("michael0smith004331"));
/*{
	firstName: "michael",
	lastName: "smith",
	id: "4331"
} */
// console.log(parseCode("Thomas00LEE0000043"));
/*{
	firstName: "Thomas",
	lastName: "LEE",
	id: "43"
} */





// 177 ==>	Sort Odds Keeping Evens in Place
// 	Write a function that sorts only the odd numbers in an array in ascending order, keeping the even numbers in their current place.
// 	For example, if our input array is: [5, 2, 6, 6, 1, 4, 9, 3]:
	// [_, 2, 6, 6, _, 4, _, _]  // keep evens in place.
	// // Sort odds: [5, 1, 9, 3] => [1, 3, 5, 9]
	// [1, 2, 6, 6, 3, 4, 5, 9]  // final array.
	
// Arrays may contain duplicate numbers.

function oddSort(arr, i = 0) {
	// PATTERN 1
	// let oddNumbers = arr.filter(ele => ele%2 != 0).sort((a, b)=> a-b);
	// for (var i = 0, j = 0; i < arr.length; i++) {
	// 	if ( arr[i] % 2 != 0) {
	// 		arr[i] = oddNumbers[j] ;
	// 		j++;
	// 	}
	// }
	// return arr;

	// PATTERN 2
	let oddNumbers = arr.filter(ele => ele%2 != 0).sort((a, b)=> a-b);
	return arr.map(ele=> ele % 2 ? oddNumbers[i++] : ele);

}
// console.log( oddSort([7, 5, 2, 3, 1]) ); // [1, 3, 2, 5, 7]
// console.log( oddSort([3, 7, 0, 9, 3, 2, 4, 8]) ); // [3, 3, 0, 7, 9, 2, 4, 8]
// console.log( oddSort([2, 2, 8, 4]) ); // [2, 2, 8, 4]
// console.log( oddSort([7, 9, 7]) ); // [7, 7, 9]





// 178 ==>	Sort Positives, Keep Negatives
// 	Write a function that sorts the positive numbers in ascending order, and keeps the negative numbers untouched.
// 	If given an empty array, you should return an empty array.
// 	Integers will always be either positive or negative (0 isn't included in the tests).
function posNegSort(arr, i = 0) {
	let posNumbers = arr.filter(ele => ele > 0).sort((a, b)=> a-b);
	return arr.map(ele=> ele > 0 ? posNumbers[i++] : ele);
}
console.log( posNegSort([6, 3, -2, 5, -8, 2, -2])); // [2, 3, -2, 5, -8, 6, -2]
console.log( posNegSort([6, 5, 4, -1, 3, 2, -1, 1])); // [1, 2, 3, -1, 4, 5, -1, 6]
console.log( posNegSort([-5, -5, -5, -5, 7, -5])); // [-5, -5, -5, -5, 7, -5]
console.log( posNegSort([])); // []






// 179 ==> Burrows-Wheeler Transform
// 	Burrows-Wheeler transform (BWT) is an algorithm which is used in data compression. Given a string text, BWT of text is a modified version of the string with same length as text. It can then be used to efficiently find substrings of text (which won't be covered here). We will just find the BWT of text. Consider "$" as the terminator character at the end of every input text.
// 		Build Burrows-Wheeler-Matrix (BWM) containing all rotations of text.
// 		Sort BWM lexicographically ($ < a < b < ... < z).
// 		BWT is the last coloumn of BWM and gets returned.
// 		// Example with text = "banana$"
// 		// BWM (all rotations of text):
// 		banana$
// 		anana$b
// 		nana$ba
// 		ana$ban
// 		na$bana
// 		a$banan
// 		$banana
// 		// BWM sorted lexicographically:
// 		$banana
// 		a$banan
// 		ana$ban
// 		anana$b
// 		banana$
// 		na$bana
// 		nana$ba
// 		// BWT (last coloumn of BWM):
// 		annb$aa
function bwTransform(str) {
	// body...
}
console.log( bwTransform("banana$") ); // "annb$aa"
console.log( bwTransform("mississippi$") ); // "ipssm$pissii"
console.log( bwTransform("acccgtttgtttcaatagatccatcaa$") ); // "aacc$tacgttctaccatcaatatttgg"