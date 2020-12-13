// Emphasise the Words
// Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.
// Examples

function emphasise(str) {
    return str.toLowerCase().replace(/(\b.)/g, (grp1) => grp1.toUpperCase());
}
// console.log( emphasise("hello world"));//"Hello World"
// console.log( emphasise("GOOD MORNING"));//"Good Morning"
// console.log( emphasise("99 red balloons!"));//"99 Red Balloons!"



// Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
// Examples
// convertBinary("house") ➞ "01110"
// convertBinary("excLAIM") ➞ "0100000"
// convertBinary("moon") ➞ "0111"
// Notes
// Conversion should be case insensitive (see example #2).

function convertBinary(str) {
    // return str.replace(/([a-m])|([n-z])/gi, (group, grp1) => grp1 != undefined ? 0 : 1)
    return str.replace(/[a-m]|([n-z])/gi, (match, g1) => Number(match == g1));
}

// console.log( convertBinary("house") ); // "01110"
// console.log( convertBinary("excLAIM") ); // "0100000"
// console.log( convertBinary("moon") ); // "0111"



// RegEx: Boundary Assertions I
// Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.
// Examples
// isJS("/users/user.jsx") ➞ true
// isJS("/users/user.js") ➞ true
// isJS("/users/user.ts") ➞ false
// Notes
// Use a RegEx boundary assertion in your function.

function isJS(str) {
    return /\.jsx?$/.test(str);
}

// console.log( isJS("/users/user.jsx") ); // true
// console.log( isJS("/users/user.js") ); // true
// console.log( isJS("/users/user.ts") ); // false




// How Many Decimal Places?
// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.
// Examples
// getDecimalPlaces("43.20") ➞ 2
// getDecimalPlaces("400") ➞ 0
// getDecimalPlaces("3.1") ➞ 1
// Notes
// Return 0 if the number doesn't have any decimal places (see example #2).

function getDecimalPlaces(str) {
    return str.replace(/\d+\.?/, '').length;
}

// console.log( getDecimalPlaces("43.20") ); // 2
// console.log( getDecimalPlaces("400") ); // 0
// console.log( getDecimalPlaces("3.1") ); // 1



// Regex Series: 5-Digit Zip Code
// Write a regular expression that matches a string if and only if it is a valid zip code.
// Examples
// "32554" ➞ true
// "92 342" ➞ false
// // Invalid: contains a whitespace
// "9@342" ➞ false
// // Invalid: contains a non-numeric character
// "923444" ➞ false
// // Invalid: length is not 5
// Notes
// Zipcodes must be 5 digits long exactly and only contain numbers.
// Not allowed: non-numeric characters or whitespaces.
// This challenge is designed to use Regex only.

const regex = /^\d{5}$/;
// console.log( regex.test('32554')); // true
// console.log( regex.test('92 342')); // false
// console.log( regex.test('9@342')); // false
// console.log( regex.test('923444')); // false



// Prefixes vs. Suffixes
// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).
// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.
// Examples
// isPrefix("automation", "auto-") ➞ true
// isSuffix("arachnophobia", "-phobia") ➞ true
// isPrefix("retrospect", "sub-") ➞ false
// isSuffix("vocation", "-logy") ➞ false
// Notes
// The prefix and suffix arguments have dashes - in them.

function isPrefix(str, target) {
    const regex = new RegExp(`^${target}?`, 'g')
    return regex.test(str);
}

function isSuffix(str, target) {
    const regex = new RegExp(`${target.slice(1)}$`, 'g')
    return regex.test(str);
}

// console.log( isPrefix("automation", "auto-") ); // true
// console.log( isSuffix("arachnophobia", "-phobia") ); // true
// console.log( isPrefix("retrospect", "sub-") ); // false
// console.log( isSuffix("vocation", "-logy") ); // false




// Detect Browser from User Agent
// You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.
// console.log(navigator.userAgent)
// Examples
// detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36") ➞ "Google Chrome"
// detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0") ➞ "Mozilla Firefox"
// detectBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko") ➞ "Internet Explorer"
// Notes
// All test case user agents are valid.


// console.log(navigator.userAgent)

function detectBrowser(str) {
    const detect = {
        chrome: 'Google Chrome',
        firefox: 'Mozilla Firefox',
        opera: 'Opera',
        trident: 'Internet Explorer',
        safari: 'Safari',
    }

    let match = str.match(/[a-z]+\/[\d.]+/ig);
    return match.find((ele) => {
        let firstWord = ele.replace(/\/.*/, '').toLowerCase();
        return detect[firstWord] || false;
    });
}

console.log(
    detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36")
); //  "Google Chrome"

console.log(
    detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0")
); //  "Mozilla Firefox"

console.log(
    detectBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko")
); //  "Internet Explorer"
