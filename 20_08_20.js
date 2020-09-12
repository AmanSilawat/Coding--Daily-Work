// 155 ==>  Sort the Unsortable
//  In this challenge you will be given an array similar to the following:
//    [[3], 4, [2], [5], 1, 6]
//  In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
//    [1, [2], [3], 4, [5], 6]
//  Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
//  To reiterate, elements of the array will be either integers or arrays with a single integer.
function sortIt(array) {
    // PATTERN 1
    // return array.sort()

    // PATTERN 2
    return array.sort((a, b) => {
        if (Array.isArray(a) && Array.isArray(b)) {
            return a[0] - b[0];
        } else if (Array.isArray(a)) {
            return a[0] - b;
        } else if (Array.isArray(b)) {
            return a - b[0];
        } else {
            return a - b;
        }
    });
}
console.log(sortIt([4, 1, 3])); // [1, 3, 4]
console.log(sortIt([[4], [1], [3]])); // [[1], [3], [4]]
console.log(sortIt([4, [1], 3])); // [[1], 3, 4]
console.log(sortIt([[4], 1, [3]])); // [1, [3], [4]]
console.log(sortIt([[3], 4, [2], [5], 1, 6])); // [1, [2], [3], 4, [5], 6]

// 156 ==>  Merge Arrays in Order
//  Given two arrays, merge them to one array and sort the new array in the same order as the first array.
//  You'll always get two arrays as arguments.
//  The first array is always sorted, either asc or desc.
function mergeSort(array1, array2) {
    // PATTERN 1
    // if(array1[0] < array1[1] ){
    //   array2.sort()
    // }
    // else{
    //   array2.sort((a, b) => b - a)
    // }
    // return [...array1, ...array2]

    // PATTERN 2
    return [...array1, ...(array1[0] < array1[1] ? array2.sort() : array2.sort((a, b) => b - a))];
}
console.log(mergeSort([1, 2, 3], [5, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSort([8, 6, 4, 2], [-2, -6, 0, -4])); // [8, 6, 4, 2, 0, -2, -4, -6]
console.log(mergeSort([120, 180, 200], [190, 175, 130])); // [120, 130, 175, 180, 190, 200]

// 157 ==>  Rearrange the Number
//  Given a number, return the difference between the maximum and minimum numbers that can be formed when the digits are rearranged.
// mutability and immutability of array
function rearrangedDifference(number) {
    // PATTERN 1
    // let str = String(number).split("")
    // return str.sort((a, b)=> b - a).join("") - str.sort().join("")
    // let str = [...`${number}`]

    // PATTERN 2
    let str = Array.from(`${number}`).sort();
    return Math.abs(str.join("") - str.reverse().join(""));
}

console.log( rearrangedDifference(972882) ); // 760833
// 988722 - 227889 = 760833
console.log( rearrangedDifference(3320707) ); // 7709823
// 7733200 - 23377 = 7709823
console.log( rearrangedDifference(90010) ); // 90981
// 91000 - 19 = 90981