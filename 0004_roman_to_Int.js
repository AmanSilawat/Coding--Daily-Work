/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 95.17 %
// Memory: 20.18 %
var romanToInt = function (s) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        XL: 40,
        L: 50,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let arr = s.match(/CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/g)
    return arr.reduce((acc, currVal) => acc + roman[currVal], 0);
};

romanToInt('III'); // 3
romanToInt('IV'); // 4
romanToInt('IX'); // 9
romanToInt('LVIII'); // 58
romanToInt('MMMXLV'); // 3045


// Runtime: 73.66 %
// Memory: 18.64 %
var romanToInt2 = function (s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    const items = s.split('').map(val => roman[val]);
    let result = 0;
    let temp = items[0];

    for (let i = 1; i < items.length; i++) {
        if (items[i - 1] === items[i]) {
            temp += items[i];
        } else if (items[i - 1] < items[i]) {
            result -= temp;
            temp = items[i];
        } else if (items[i - 1] > items[i]) {
            result += temp;
            temp = items[i];
        }
    }

    return result + temp;
};

// input: LVIII, output: 58
// explanation

// ! iterations
// (i=0) -> res = 0 , temp = 50, curr = 5 , prev = 50
// (i=1) -> res = 50, temp = 5 , curr = 1 , prev = 5
// (i=2) -> res = 55, temp = 1 , curr = 1 , prev = 1
// (i=3) -> res = 55, temp = 2 , curr = 1 , prev = 1
// (i=4) -> res = 55, temp = 3 , curr = X , prev = 1

// res + temp; 55 + 3 = 58  <- (OUTER LOOP CALCULATION)




// Runtime: 43.62 %,    176 ms,
// Memory: 62.40%,      45.2 MB
var romanToInt3 = function (s) {
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') s[i] = 1
        if (s[i] === 'II') s[i] = 2
        if (s[i] === 'III') s[i] = 3
        if (s[i] === 'V') s[i] = 5
        if (s[i] === 'X') s[i] = 10
        if (s[i] === 'L') s[i] = 50
        if (s[i] === 'C') s[i] = 100
        if (s[i] === 'D') s[i] = 500
        if (s[i] === 'M') s[i] = 1000
    }
    return s.reduce((result, item, index, array) => item < (array[index + 1]) ? result -= item : result += item, 0)
};


debugger

// Runtime: 75.23%,    164 ms,
// Memory: 62.40%,      45.2 MB
var romanToInt4 = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0;
    let prevValue = 0;
    for (let index = 0; index < s.length; index++) {
        const value = map[s[index]]
        sum += value
        if (prevValue < value) {
            sum = sum - (2 * prevValue)
        }
        prevValue = value;
    }
    return sum;
};

console.log(romanToInt4('III')); // 3
console.log(romanToInt4('IV')); // 4
console.log(romanToInt4('IX')); // 9
console.log(romanToInt4('LVIII')); // 58
console.log(romanToInt4('MMMXLV')); // 3045