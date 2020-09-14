// 194 ==>	Is the Array Circular?
// 	Write a function that determines if an array is circular. An array is circular if its subarrays can be reordered such that each subarray's last element is equal to the next subarray's first element.
// 	For example, the array [[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]] is circular because we can re-arrange the elements to create the following array:
// 		[[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]
// 		isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]) ➞ true
// 		// Can be reordered: [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]
// 		isCircular([[1, 1], [1, 2]]) ➞ false
// 		isCircular([[2, 1], [1, 2]]) ➞ true
// 		isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]) ➞ false
function isCircular(array) {
	let first_element = []
	let last_element = []
	
	for (let i = 0; i < array.length; i++) {
		first_element.push(array[i][0])
		last_element.push(array[i][array[i].length - 1])
	}
​
	first_element.sort((a, b) => a - b)
	last_element.sort((a, b) => a - b)
​
	for (let i = 0; i < first_element.length; i++) {
		if (first_element[i] != last_element[i]) {
			return false
		}
	}
	return true
}
console.log(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]))
console.log(isCircular([[1, 1], [1, 2]]))
console.log(isCircular([[2, 1], [1, 2]]))
console.log(isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]))