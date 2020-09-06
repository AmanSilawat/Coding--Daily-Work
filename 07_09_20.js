// 184 ==> Contact List
// 	Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

// An array with a single name should be trivially returned. An empty array, or an input of null or undefined should return an empty array.
function sortContacts(arr, order) {
	if (!arr) {
		return [];
	}
	if (order == "ASC") {
		return arr.sort((a, b)=> a.split(' ')[1] < b.split(' ')[1] ? -1 : 1);
	}
	else {
		return arr.sort((a, b)=> a.split(' ')[1] < b.split(' ')[1] ? 1 : -1);
	}
}
// console.log(sortContacts([
// 	"John Locke",
// 	"Thomas Aquinas",
// 	"David Hume",
// 	"Rene Descartes"
// ], "ASC"));
/*[
	"Thomas Aquinas",
	"Rene Descartes",
	"David Hume",
	"John Locke"
]*/
// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)
// console.log(sortContacts([
// 	"Paul Erdos",
// 	"Leonhard Euler",
// 	"Carl Gauss"
// ], "DESC"));
/*[
	"Carl Gauss",
	"Leonhard Euler",
	"Paul Erdos"
]*/
// Gauss (G) > Erdos (ER) > Euler (EU)
// console.log( sortContacts([], "DESC"));// []
// console.log( sortContacts(null, "DESC"));// []
// console.log( sortContacts(undefined, "DESC"));// []



// 185 ==> All Pairs that Sum to Target
// 	Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger]. If no pairs are found, return an empty array []. You are only allowed to use each number once in a pair.
// white_tick
// eyes
// raised_hands
function allPairs(arr, target) {
	let res = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if (arr[i] + arr[j] == target) {
				res.push( [Math.min(arr[i], arr[j]), Math.max(arr[j], arr[i])] );
			}
		}
	}
	return res.sort(([a], [b]) => a - b);
}
console.log( allPairs([2, 4, 5, 3], 7));
// [[2, 5], [3, 4]] // 2 + 5 = 7, 3 + 4 = 7
console.log( allPairs([5, 3, 9, 2, 1], 3));
// // [[1, 2]]
console.log( allPairs([4, 5, 1, 3, 6, 8], 9));
// // [[1, 8], [3, 6], [4, 5]] // Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]