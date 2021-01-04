// Deep Arithmetic
// Write a function that takes an array of strings of arbitrary dimensionality([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

// Notes
// Numbers in strings can be negative, but will all be base - 10 integers.
// Negative numbers may directly follow another number.
// The hyphen or minus character("-") does not only occur in numbers.
// Arrays may be ragged or empty.


function sum(arr) {
    let flatedArr = arr.flat(Infinity);
    let resArr = [];
    for (let i = 0; i < flatedArr.length; i++) {
        let x = flatedArr[i].match(/-?[0-9]+/g) || ['0'];
        resArr.push(...x);
    }
    return resArr.reduce((acc, currVal) => acc + Number(currVal), 0);
}

// Examples
console.log(sum(["1", "five", "2wenty", "thr33"])); // 36
console.log(sum([["1X2", "t3n"], ["1024", "5", "64"]])); // 1099
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]])); // 759

