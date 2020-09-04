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
	// var p = 0;
	// var r = [];
	// for (let i in arr) {
	// 	let a = arr[i].toUpperCase().split('');
	// 	r[i] = 0;
	// 	for (let j in a) {
	// 		r[i] += obj[ a[j] ];
	// 	}
	// }
	// p = Math.max(...r)
	// return arr.filter((v, i)=> r[i] == p);


	// PATTERN 3
	var p = 0;
	var r = [];
	for (let i in arr) {
		let a = arr[i].toUpperCase().split('');
		r[i] = 0;
		for (let j in a) {
			r[i] += obj[ a[j] ];
		}
		console.log(p," p")
		console.log(r[i], " r[i]")
		console.log(Math.max(r[i], p))
		console.log('')
		p = Math.max(r[i], p)
	}
	return arr.filter((v, i)=> r[i] == p);



}
// console.log( bestWords(["got", "test", "oh", "sat", "rents"])); // ["oh", "rents"]
// console.log( bestWords(["digest", "divest", "verge", "honey", "money"])); // ["honey"]
// console.log( bestWords(["berry", "whiz", "laughed", "ghetto", "psychic"])); // ["whiz", "psychic"]






// 182 => Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays.
// Remember to sort the keys.
function keysAndValues(obj) {
	// PATTERN 1
	// let keys = [];
	// let values = [];
	// for ( let [key, val] of Object.entries(obj)) {
	// 	keys.push(key);
	// 	values.push(val);
	// }
	// return [keys.sort(), values.sort()];

	// PATTERN 2
	return [ Object.keys(obj).sort(), Object.values(obj).sort() ];
}
// console.log( keysAndValues({ a: 1, b: 2, c: 3 }) );
// // [["a", "b", "c"], [1, 2, 3]]
// console.log( keysAndValues({ b: "Microsoft", a: "Apple", c: "Google" }) );
// // [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// console.log( keysAndValues({ key1: false, key2: true, key3: undefined }) );
// // [["key1", "key2", "key3"], [true, false, undefined]]




// 183 ==>	Sort Beethoven's Nicknamed Works by Genre, Nickname, and Opus Number
// 	Write a function that takes an array of nicknamed works by Beethoven (objects with op, nickname, and genre properties, all non-empty strings) and returns an object whose keys are the pluralized genres and whose values are arrays of the corresponding work-objects, with each array sorted alphabetically by nickname (and secondarily by op in the case of a shared nickname—more on this below).
// 	To pluralize a genre, just add an "s", with the exception of "symphony" (pl. "symphonies").
// 	Each nickname has headline-style capitalization (the first letter of each word is uppercase).
// 	Opus-number strings (op) always begin with an integer, but some opuses contain more than one work. In that case, a work's op string will end either with a lowercase letter (e.g., "81a") or with a slash followed by another integer (e.g., "27/1"). (For a given opus that contains more than one work, either the lettering scheme or the numbering scheme is used—never both.)
// 	A single nickname may apply to an entire opus that contains multiple works of the same genre. Such works should be sub-sorted by their full op strings (so "1a" would precede "1b", and "1/1" would precede "1/2").
// 	Try to keep your code abstract! With the exception of the "symphony" genre, you don't have to know any of the values of the input-data to complete this challenge.

function sortByGenre(arr) {
	// step 1: sort the nickname
	arr.sort((a, b)=> {
		if ( a.nickname < b.nickname ) return -1;
		if ( a.nickname > b.nickname ) return 1;
		if ( a.op < b.op ) return -1;
		if ( a.op > b.op ) return 1;
		return 0;
	});
	// step 2: pluralize the genres
	arr.forEach(ele=> {
		ele.genre = ele.genre == "symphony" ? 'symphonies' : (ele.genre+"s")
	});
	return arr;
}

console.log( sortByGenre( [
	{ op: '125', nickname: 'Choral', genre: 'symphony' },
	{ op: '55', nickname: 'Eroica', genre: 'symphony' },
	{ op: '67', nickname: 'Fate', genre: 'symphony' },
	{ op: '68', nickname: 'Pastoral', genre: 'symphony' }
] ));
console.log( sortByGenre( [
	{ op: '57', nickname: 'Appassionata', genre: 'piano sonata' },
	{ op: '106', nickname: 'Hammerklavier', genre: 'piano sonata' },
	{ op: '81a', nickname: 'Les Adieux', genre: 'piano sonata' },
	{ op: '27/1', nickname: 'Moonlight', genre: 'piano sonata' },
	{ op: '28', nickname: 'Pastorale', genre: 'piano sonata' },
	{ op: '13', nickname: 'Pathétique', genre: 'piano sonata' },
	{ op: '31/2', nickname: 'Tempest', genre: 'piano sonata' },
	{ op: '53', nickname: 'Waldstein', genre: 'piano sonata' }
] ));
console.log( sortByGenre( [
	{ op: '74', nickname: 'Harp', genre: 'string quartet' },
	{ op: '59/1', nickname: 'Razumovsky', genre: 'string quartet' },
	{ op: '59/2', nickname: 'Razumovsky', genre: 'string quartet' },
	{ op: '59/3', nickname: 'Razumovsky', genre: 'string quartet' },
	{ op: '95', nickname: 'Serioso', genre: 'string quartet' }
]));
console.log( sortByGenre( [
	{ op: '59/3', nickname: 'Razumovsky', genre: 'symphony' },
	{ op: '74', nickname: 'Harp', genre: 'string quartet' },
	{ op: '59/2', nickname: 'Razumovsky', genre: 'string quartet' },
	{ op: '95', nickname: 'Serioso', genre: 'string quartet' },
	{ op: '59/1', nickname: 'Razumovsky', genre: 'string quartet' }
]));
console.log( sortByGenre( [
	{ op: '47', nickname: 'Kreutzer', genre: 'violin sonata' },
	{ op: '24', nickname: 'Spring', genre: 'violin sonata' }
]));
console.log( sortByGenre( [
	{ op: '97', nickname: 'Archduke', genre: 'piano trio' }, { op: '70/1', nickname: 'Ghost', genre: 'piano trio' }
]));
console.log( sortByGenre( [
	{ op: '73', nickname: 'Emperor', genre: 'piano concerto' }
] ));