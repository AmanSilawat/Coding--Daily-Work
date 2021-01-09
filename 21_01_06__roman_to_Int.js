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



console.log(romanToInt2('III')); // 3
console.log(romanToInt2('IV')); // 4
console.log(romanToInt2('IX')); // 9
console.log(romanToInt2('LVIII')); // 58
console.log(romanToInt2('MMMXLV')); // 3045
