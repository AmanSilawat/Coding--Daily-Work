// 187 ==> Alternate Sort
// 	Write a function that sorts a given array in an alternative fashion. The result should be a array sorted in ascending order (number then letter). Array will contain equal amounts of integer numbers and single characters.
function alternateSort(arr) {
    let num = [];
    let char = [];
    arr.sort((a, b) => a < b ? -1 : 1);

    for (let i = 0; i < arr.length; i++) {
        typeof arr[i] == "string" ? char.push(arr[i]) : num.push(arr[i]);
    }
    for (let i = 0, j = 0; i < arr.length; i++) {
        arr[i] = (i % 2 == 0) ? num[j] : char[j++];
    }
    return arr;
}
// console.log(alternateSort(["a", "b", "c", 1, 2, 3])); // [1, "a", 2, "b", 3, "c"]
// console.log(alternateSort([-2, "f", "A", 0, 100, "z"])); // [-2, "A", 0, "f", 100, "z"]
// console.log(alternateSort(["X", 15, 12, 18, "Y", "Z"])); // [12, "X", 15, "Y", 18, "Z"]




// 188 ==>	Get Student with Best Test Avg.
// 	Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.

// All students in an object will have the same amount of test scores. So no student will have taken more tests than another.
function getBestStudent(obj) {
    let maxAvg = -Infinity;
    let maxAvgOf;
    for (let key in obj) {
        let thisAvg = obj[key].reduce((tot, ele) => tot + ele) / obj[key].length;
        if (thisAvg > maxAvg) {
            maxAvg = thisAvg;
            maxAvgOf = key;
        }
    }
    return maxAvgOf;
}
console.log(getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
}));// "John"
// John's avg = 90
// Bob's avg = 83.33
console.log(getBestStudent({
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
}));// "Mike"




// 189 ==>	Almost Sorted Sequence
// 	An almost-sorted sequence is a sequence that is strictly increasing or strictly decreasing if you remove a single element from the array (no more, no less). Write a function that returns true if an array is almost-sorted, and false otherwise.
// 	For example, if you remove 80 from the first example, it is perfectly sorted in ascending order. Similarly, if you remove 7 from the second example, it is perfectly sorted in descending order.
// Completely sorted arrays should return false.
// Arrays will always be > 3 in length (to remove ambiguity).
// Numbers in each input array will be unique - don't worry about "ties".
function almostSorted(arr) {
    let asc = [...arr].sort((a, b)=>a-b);
    // let des = asc.reverse();
    // compareArr(arr, )
}
console.log(almostSorted([1, 3, 5, 9, 11, 80, 15, 33, 37, 41] ));// true
console.log(almostSorted([6, 5, 4, 7, 3]));// true
console.log(almostSorted([6, 4, 2, 0]));// false
// Sequence is already sorted.
console.log(almostSorted([7, 8, 9, 3, 10, 11, 12, 2]));// false
// Requires removal of more than 1 item.