/*
Convert a Number to Base-2

Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

Examples
binary(1) ➞ "1"
1*1 = 1

binary(5) ➞ "101"
1*1 + 1*4 = 5

binary(10) ➞ "1010"
1*2 + 1*8 = 10
Notes
Numbers will always be below 1024 (not including 1024).
The && operator could be useful.
The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
If a binary conversion for 0 is attempted, return "0".
*/

// pattern 1
const binary_ = (num) => num.toString(2);


// pattern 2
const binary__ = (num) => {
    const atBitBinary = [512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
    if (num == 0) return '0';
    let binary_res = '';
    let temp = num;
    for (const bit of atBitBinary) {
        if (bit <= num) {
            if (temp / bit >= 1) {
                temp -= bit;
                binary_res = binary_res + '1';
            } else {
                binary_res = binary_res + '0';
            }
        }
    }
    return binary_res
};

// pattern 3
const binary___ = (num) => {
    if (num == 0) return '0';

    let result = '';
    while (num > 0) {
        result += num % 2;
        num = Math.floor(num / 2)
    }

    return result.split('').reverse().join('')
};

// pattern 4
const binary = (num) => {
    if (num == 0) return '0';

    let result = [];
    while (num > 0) {
        result.push(num % 2);
        num = Math.floor(num / 2)
    }

    return result.reverse().join('')
};

const assert = require('assert/strict');

// assert.deepStrictEqual(binary(1), "1")
// assert.deepStrictEqual(binary(10), "1010")
// assert.deepStrictEqual(binary(100), "1100100")
// assert.deepStrictEqual(binary(0), "0")
// assert.deepStrictEqual(binary(69), "1000101")
// assert.deepStrictEqual(binary(1023), "1111111111")
// assert.deepStrictEqual(binary(511), "111111111")
// assert.deepStrictEqual(binary(666), "1010011010")
// assert.deepStrictEqual(binary(123), "1111011")