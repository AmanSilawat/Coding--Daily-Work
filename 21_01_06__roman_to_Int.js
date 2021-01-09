/**
 * @param {string} s
 * @return {number}
 */
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
    console.log(arr);
    return arr.reduce((acc, currVal) => acc + roman[currVal], 0);
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MMMXLV')); // 3045
