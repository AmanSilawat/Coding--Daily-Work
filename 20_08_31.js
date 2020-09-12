// 173 ==> Alphabetically Sorted
// 	A word is alphabetically sorted if all of the letters in it are in consecutive alphabetical order. Some examples of alphabetically sorted words: abhors (a is before b, b is before h, h is before o, etc.), ghost, accent, hoop. Create a function that takes in a sentence as input and returns true if there is at least one alphabetically sorted word inside that has a minimum length of 3.

// 	Do not count words with 2 or fewer characters. Ignore punctuation (periods, commas, etc).
function isAlphabeticallySorted(string) {
    //  pattern 1
    //Step1 split the string
    // let words = string.replace(/[\.,]/g,"").split(" ")
    // //step2 use some method
    // return words.some(word=>{
    // //step2.1 compare original word to sorted word
    //     if(word.length>=3){
    //         return word == word.split("").sort().join("")
    //     }
    // })

    // // Pattern 2
    let words = string.replace(/[\.,]/g, "").split(" ")
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 3 && words[i] == words[i].split("").sort().join("")) { 
            return true
        }
    }
    return false
}
// console.log( isAlphabeticallySorted("Paula has a French accent."));
// // true // "accent" is alphabetically sorted.

// console.log( isAlphabeticallySorted("The biopsy returned negative results."));
// // true // "biopsy" is alphabetically sorted.

// console.log( isAlphabeticallySorted("She sells sea shells by the sea shore."));
// // false // Although "by" is alphabetically sorted, it is only 2 letters long.





// 174 ==>	Sort by the Letters
// 	Write a function that sort each string in an array by the letter in alphabetic ascending order (a-z).
// 	Each string will only have one (lowercase) letter. If given an empty array, return an empty array.
function sortByLetter(array){
    // step1 sort the array
    return array.sort((a,b)=>{
        // step1.1 replace all the digit from the both strings
        console.log("replacing from: ",a)
        console.log("replacing from: ",b)
        // think about it ***
        let x = a.replace(/\d/g,"")
        let y = b.replace(/\d/g,"")
        // step1.2 compare letters and return
        return x > y ? 1 : -1
    });
}
// console.log(sortByLetter(["932c", "832u32", "2344b"])) // ["2344b", "932c", "832u32"]
// console.log(sortByLetter(["99a", "78b", "c2345", "11d"])) // ["99a", "78b", "c2345", "11d"]
// console.log(sortByLetter(["572z", "5y5", "304q2"])) // ["304q2", "5y5", "572z"]
// console.log(sortByLetter([])) // []

// 175 ==>	Mona's Sort
// 	Mona has created a method to sort an array in ascending order. Starting from the left of the array, she compares numbers by pairs. If the first pair is ordered [smaller number, larger number], she moves on. If the first pair is ordered [larger number, smaller number], she swaps the two integers before moving on to the next pair. She repeats this process until she reaches the end of the array. Then, she moves back to the beginning of the array and repeats this process until the entire array is sorted. If the unsorted array is: [3, 9, 7, 4], she will perform the following steps (note Swaps here refers to cumulative swaps):
// 		She starts with the first pair.
// 		[3, 9] is in order, move on. Array: [3, 9, 7, 4]. Swaps: 0.
// 		[9, 7] is not. Swap. Array: [3, 7, 9, 4]. Swaps: 1
// 		[9, 4] is not. Swap. Array: [3, 7, 4, 9]. Swaps: 2
// 		Check if array is sorted. It is not, so start over at first pair.
// 		[3, 7] is in order, move on. Array: [3, 7, 4, 9]. Swaps: 2
// 		[7, 4] is not. Swap. Array: [3, 4, 7, 9]. Swaps: 3.
// 		[7, 9] is in order, move on. Array: [3, 4, 7, 9]. Swaps: 3.
// 		Check if array is sorted. It is. End.
// 	Sorting the array [3, 9, 7, 4] takes her 3 swaps. Write a function that takes in an unsorted array and returns the number of swaps it takes for the array to be sorted according to Mona's algorithm.

function numberOfSwaps(array) {
    // step1 create variable swapCount and assign it 0
    let swapCount = 0
    // step2 sort the array
    for (let j = 0; j < array.length; j++) {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                [array[i - 1], array[i]] = [array[i], array[i - 1]]
                swapCount++
            }
        }
    }
    return [swapCount, array]
}
console.log(numberOfSwaps([5, 4, 3])) //3
console.log(numberOfSwaps([1, 3, 4, 5])) //0
console.log(numberOfSwaps([5, 4, 3, 2])) //6