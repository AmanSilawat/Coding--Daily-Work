// 164 ==>	The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest. Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// All wines will be different prices, so there is no confusion in the ordering.
function chosenWine(arr) {
	// PATTERN 1
	// step 1: check the lenght of array
	// if (arr.length > 1) {
	// 	// step 2: if grater than 1 than sort
	// 	arr.sort((a, b)=> a.price - b.price)
	// 	return arr[1].name
	// }
	// else{
	// 	// step 3: otherwise return the name or null

	// 	// return typeof arr[0] != "undefined" ? arr[0].name : null;

	// 	return arr[0]?.name || null;  //optional chaning
	// }

	// PATTERN 2
	// return (arr.sort(({price:a}, {price:b})=> a-b)[1] || arr[0] || {}).name || null

	// PATTERN 3
	return (arr.sort(({price:a}, {price:b})=> a-b)[1] || arr[0] || {name: null}).name
}
// console.log( chosenWine([
// 	{ name: "Wine A", price: 8.99 },
// 	{ name: "Wine 32", price: 13.99 },
// 	{ name: "Wine 9", price: 10.99 }
// ]) ); // "Wine 9"
// console.log( chosenWine([{ name: "Wine A", price: 8.99 }]) ); // "Wine A"
// console.log( chosenWine([]) ); // null






// 165 ==>	Leaderboard Sort
// 	Given an array of users, each defined by an object with the following properties: name, score, reputation create a function that sorts the array to form the correct leaderboard. The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score. Once you know the trueScore of each user, sort the array according to it in descending order.
function leaderboards(arr) {
	// step 1: multiply reputation by 2 result is add into the score
	return arr.sort((a, b)=>{
		return ((b.reputation * 2) + b.score) - ((a.reputation * 2) + a.score);
	})
	// step 2: sorting in desending order
	// step 3: return arr
}
// console.log(leaderboards([
// 	{ name: "a", score: 100, reputation: 20 },
// 	{ name: "b", score: 90, reputation: 40 },
// 	{ name: "c", score: 115, reputation: 30 },
// ]) );

//reuslt
/* [
	{ name: "c", score: 115, reputation: 30 },  // trueScore = 175
	{ name: "b", score: 90, reputation: 40 },   // trueScore = 170
	{ name: "a", score: 100, reputation: 20 }   // trueScore = 140
]

*/





// 166 ==>	Concatenate to Form Target Array
// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise. Arrays do not have to be sorted (see example #2). Arrays should concatenate to create the final array exactly (see examples #3 and #4).
function canConcatenate(arr, target) {
	// PATTERN 1 (BAD WAY)
	// let res = arr.flat(Infinity);
	// return res.sort((a, b)=> a-b).join(',') == target.sort((a, b)=> a-b).join(',')

	// PATTERN 2
	let arrFlated = arr.flat(Infinity);
	if (arrFlated.length != target.length) {
		return false;
	}
	else{
		arrFlated.sort((a,b)=>a-b);
		let targetAse = target.sort((a,b)=>a-b);
		for (var i = 0; i < targetAse.length; i++) {
			if (targetAse[i] != arrFlated[i]) {
				return false;
			}
		}
		return true;
	}
}
// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ); // true
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ); // true
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ); // false // Duplicate 7s not found in target array.
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ); // false // Missing 6 from target array.





// 167 ==>	Sum of Missing Numbers
// 	Create a function that returns the sum of missing numbers. The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.
function sumMissingNumbers(arr) {
	// // step 1: find min and max
	// let minVal = Math.min(...arr);
	// let maxVal = Math.max(...arr)
	// // step 2: missing value is added in total return total
	// let tot = 0;
	// for (var i = minVal; i <= maxVal; i++) {
	// 	if (!arr.includes(i)) {
	// 		tot += i;
	// 	}
	// }
	// return tot;

	// step 1: find min and max
	let maxVal = Math.max(...arr);
	// step 2: missing value is added in total return total
	let tot = 0;
	for (var i = Math.min(...arr); i <= maxVal; i++) {
		if (!arr.includes(i)) {
			tot += i;
		}
	}
	return tot;
}
console.log(sumMissingNumbers([1, 3, 5, 7, 10]) ); // 29 // 2 + 4 + 6 + 8 + 9
console.log(sumMissingNumbers([10, 7, 5, 3, 1]) ); // 29
console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]) ); // 1575
