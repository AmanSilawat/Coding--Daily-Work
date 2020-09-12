// 139 ==>	Sort by String Length
// 	Create a function that returns an array of strings sorted by length in ascending order.
		
	// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
	// Return an empty array if the input array is empty (see example #4).
function sortByLength(arr) {
	return arr.sort( (a,b)=> a.length - b.length )
}
// console.log( sortByLength(["a", "ccc", "dddd", "bb"]) ); // ["a", "bb", "ccc", "dddd"]
// console.log( sortByLength(["apple", "pie", "shortcake"]) ); // ["pie", "apple", "shortcake"]
// console.log( sortByLength(["may", "april", "september", "august"]) ); // ["may", "april", "august", "september"]
// console.log( sortByLength([]) ); // []




// 140 ==>	Find the Largest Numbers in a Group of Arrays
// 	Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
	return arr.map(ele=> Math.max(...ele));
}

// console.log( findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ); // [7, 90, 2]
// console.log( findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ); // [-34, -2, 7]
// console.log( findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ); // [0.7634, 9.32, 9]




// 141 ==>	Sort Numbers in Ascending Order
// 	Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// 		- Sort numbers array in ascending order.
// 		- If the function's argument is null, an empty array, or undefined; return an empty array.
// 		- Return a new array of sorted numbers.
function sortNumsAscending(arr) {
	// return Array.isArray(arr) ? arr.sort( (a, b) => a - b) : [];
	// return arr instanceof Array ? arr.sort( (a, b) => a - b) : [];
	return ( arr || [] ).sort( (a, b) => a - b);
}
// console.log( sortNumsAscending([1, 2, 10, 50, 5]) ); // [1, 2, 5, 10, 50]
// console.log( sortNumsAscending([80, 29, 4, -95, -24, 85]) ); // [-95, -24, 4, 29, 80, 85]
// console.log( sortNumsAscending(null) ); // []
// console.log( sortNumsAscending([]) ); // []




// 142 ==>	Most Left Digit
// 	Write a function that takes a string as an argument and returns the left most digit in the string.
function leftDigit(str) {
	return str.split('').find(ele=> !isNaN( Number(ele) )  );
	//// => string.split() x 7,777 ops/sec ±16.99% (89 runs sampled)

	// return [...str].find(ele=> !isNaN( Number(ele) )  );
	//// => Object spread x 284 ops/sec ±2.89% (77 runs sampled)

	// return Array.from(str).find(ele=> !isNaN( Number(ele) )  );
	//// => Array.from() x 138 ops/sec ±1.48% (75 runs sampled)


	// ------► Fastest is string.split() ◄------
	//		   ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲
	//		   | | | | | | | | | | | | |

}
console.log( leftDigit("TrAdE2W1n95!") ); // 2
console.log( leftDigit("V3r1ta$") ); // 3
console.log( leftDigit("U//DertHe1nflu3nC3") ); // 1
console.log( leftDigit("J@v@5cR1PT") ); // 5




// 143 ==> Sort Numbers in Descending Order
// 	Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.
function sortDescending(numDescending) {
	return Array.from(String(numDescending)).sort( (a, b) => b - a ).join('');
}
// console.log( sortDescending(123) ); // 321
// console.log( sortDescending(1254859723) ); // 9875543221
// console.log( sortDescending(73065) ); // 76530




// 144 ==>	Sort an Array by String Length
// 	Create a function that takes an array of strings and return an array, sorted from shortest to longest.
function sortByLength(arr) {
	return arr.sort( (a,b)=> a.length - b.length )
}
// console.log( sortByLength(["Google", "Apple", "Microsoft"]) );// ["Apple", "Google", "Microsoft"]
// console.log( sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]) );// ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// console.log( sortByLength(["Turing", "Einstein", "Jung"]) );// ["Jung", "Turing", "Einstein"]




// 145 ==>	Maximum Possible Total
// 	Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
function maxTotal(arr) {
	return arr.sort((a, b)=> b-a).slice(0, 5).reduce( (tot, ele)=> tot + ele );
}
// console.log( maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ); // 43
// console.log( maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ); // 100
// console.log( maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ); // 40




// 146 ==>	Nth Smallest Element
// 	Given an unsorted array, create a function that returns the nth smallest element (the smallest element is the first smallest, the second smallest element is the second smallest, etc).
// 	n will always be >= 1.
// 	Each number in the array will be distinct (there will be a clear ordering).
// 	Given an out of bounds parameter (e.g. an array is of size k), and you are asked to find the m > k smallest element, return null.
function nthSmallest(arr, num) {
	var res =  arr.sort((a, b) => a-b)[num-1];//outof bound
	return typeof res == "undefined" ? null : res;
}
console.log(nthSmallest([1, 3, 5, 0], 1) ); // 0
console.log(nthSmallest([1, 3, 5, 7], 1) ); // 1
console.log(nthSmallest([1, 3, 5, 7], 3) ); // 5
console.log(nthSmallest([1, 3, 5, 7], 5) ); // null
console.log(nthSmallest([7, 3, 5, 1], 2) ); // 3