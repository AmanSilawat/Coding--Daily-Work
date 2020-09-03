// 181 ==>	Scrabble Scores (Part 1)
// 	Create a function that takes an array of words, scores the words based on the Scrabble scoring table below, and returns an array of the highest scoring words. The words on the resulting array should be in the same relative order as the original array.
// 		Letter	Points
// 		A		1
// 		B		3
// 		C		3
// 		D		2
// 		E		1
// 		F		4
// 		G		2
// 		H		4
// 		I		1
// 		J		8
// 		K		5
// 		L		2
// 		M		3
// 		N		1
// 		O		1
// 		P		3
// 		Q		10
// 		R		1
// 		S		1
// 		T		1
// 		U		1
// 		V		4
// 		W		4
// 		X		8
// 		Y		4
// 		Z		10
function bestWords(arr) {
	let obj = {
		A: 1,
		B: 3,
		C: 3,
		D: 2,
		E: 1,
		F: 4,
		G: 2,
		H: 4,
		I: 1,
		J: 8,
		K: 5,
		L: 2,
		M: 3,
		N: 1,
		O: 1,
		P: 3,
		Q: 10,
		R: 1,
		S: 1,
		T: 1,
		U: 1,
		V: 4,
		W: 4,
		X: 8,
		Y: 4,
		Z: 10
	}
	// PATTERN 1
	// let tot = 0;
	// let score = [];
	// let res = [];
	// for (var i = 0; i < arr.length; i++) {
	// 	for (var j = 0; j < arr[i].length; j++) {

	// 		tot += obj[ arr[i][j].toUpperCase().trim() ];

	// 		// console.log(arr[i][j]);
	// 		// console.log( obj[ arr[i][j].toUpperCase().trim() ] );
	// 	}
	// 	score.push(tot);
	// 	tot = 0;
	// }

	// let maxVal = Math.max(...score);
	// // console.log(maxVal);

	// for (var j = 0; j < score.length; j++) {
	// 	if ( score[j] == maxVal ) {
	// 		// console.log(arr, score[j])
	// 		res.push( arr[j] );
	// 	}
	// }
	// return res;



	// PATTERN 2
	var p = 0;
	var r = [];
	for (let i in arr) {
		let a = arr[i].toUpperCase().split('');
		r[i] = 0;
		for (let j in a) {
			r[i] += obj[ a[j] ];
		}
	}
	p = Math.max(...r)
	return arr.filter((v, i)=> r[i] == p);


	// PATTERN 3 UNSOLVED
	// var p = 0;
	// var r = [];
	// for (let i in arr) {
	// 	let a = arr[i].toUpperCase().split('');
	// 	r[i] = 0;
	// 	for (let j in a) {
	// 		r[i] += obj[ a[j] ];
	// 	}
	// 	p = Math.max(r[i].p)
	// 	console.log(p)
	// }
	// return arr.filter((v, i)=> r[i] == p);



}
console.log( bestWords(["got", "test", "oh", "sat", "rents"])); // ["oh", "rents"]
console.log( bestWords(["digest", "divest", "verge", "honey", "money"])); // ["honey"]
console.log( bestWords(["berry", "whiz", "laughed", "ghetto", "psychic"])); // ["whiz", "psychic"]

