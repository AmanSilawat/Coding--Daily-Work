/ Letters Only
// Write a function that removes any non-letters from a string, returning a well-known film title.
// Examples
// lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"
// lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"
// lettersOnly("^U)6$22>8p).") ➞ "Up"
function lettersOnly(string) {
    return string.replace(/[^a-z]/gi, '');
}
// console.log(lettersOnly('R!=:~0o0./c&}9k`60=y'));
// console.log(lettersOnly('^,]%4B|@56a![0{2m>b1&4i4'));
// console.log(lettersOnly('^U)6$22>8p).'));
// RegEx Exercise 1: Find the Time
// The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.
// Make a regexp to find time in the string: "Breakfast at 09:00 in the room 123:456". In this task there's no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.
// let str = 'Breakfast at 09:00 in the room 123:456';
// console.log(str.match(/\b\d{2}:\d{2}\b/g));
// Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.
// Examples
// owofied("I'm gonna ride 'til I can't no more")
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"
// owofied("Do you ever feel like a plastic bag")
// ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"
// owofied("Cause baby you're a firework")
// ➞ "Causwe baby you'rwe a fwirwework owo"
function owofied(str) {
    return str.replace(/([ie])/g, 'w$1') + ' owo';
}
// console.log(owofied("I'm gonna ride 'til I can't no more"));
// console.log(owofied('Do you ever feel like a plastic bag'));
// console.log(owofied("Cause baby you're a firework"));
// RegEx: Boundary Assertions II
// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
// Examples
// accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]
// accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]
// accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
// Notes
// Use a RegEx boundary assertion in your function.
function accepted(array) {
    return array.filter((word) => !/^C/g.test(word));
    // return arr.filter((word) => !word.startsWith('C'));
}
// console.log(accepted(['Ducks', 'Bears', 'Cats']));
// console.log(accepted(['cars', 'trucks', 'planes']));
// console.log(accepted(['Cans', 'Worms', 'Bugs', 'Cold', 'Beans']));
// RegEx XIV: Group Ranges x|y
// Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
// const REGEXP = /blue|red/
// "red flag".match(REGEXP)  // red
// "blue flag".match(REGEXP)  // blue
// // Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
// Examples
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
// const REGEXP = /(red|blue) flag/g;
// console.log('red flag blue flag'.match(REGEXP));
// console.log('yellow flag red flag blue flag green flag'.match(REGEXP));
// console.log('pink flag red flag black flag blue flag green flag red flag '.match(REGEXP));
// RegEx XV : Group Ranges - Negated Character Sets
// Groups and ranges indicate groups and ranges of expression characters. Negated character sets match any characters that are NOT inside of brackets [ ]. You differentiate a negated character set from a regular character set by inserting a ^ inside of the [ ].
// "1234cba5678".match(/[^abc]/g)
// // "12345678", matches any character that are not a, b, or c.
// You can also negate ranges, but like with regular character sets, if the hyphen is at the beginning or ending of a range then it will be considered a literal hyphen.
// "excludenumbers123".match(/[^1-3]/g)
// // "excludenumbers", matches any character that are not the numbers 1, 2 or 3.
// Create a REGEXP that matches any characters except letters, digits and spaces. You must use a negated character set in your expression.
//  "alice15@gmail.com".match(/REGEXP/gi) ➞ ["@", "."]
// console.log('alice15@gmail.com'.match(/[^\w]/gi));
// RegEx XVII : Quantifiers - x{n}, x{n,}, x{n,}
// Quantifiers indicate numbers of characters or expressions to match.
// x{n}
// Where n is a positive integer, matches exactly n occurrences of the preceding item x.
// "candy".match(/a{2}/) ➞ null
// "caandy".match(/a{2}/) ➞ "aa"
// x{n,}
// Where n is a positive integer, matches at least n occurrences of the preceding item x.
// "candy".match(/a{2,}/) ➞ null
// "caandy".match(/a{2,}/) ➞ "aa"
// "caaaaaandy".match(/a{2,}/) ➞ "aaaaaa"
// x{n,m}
// Where n is 0 or a positive integer, m is a positive integer, and m > n, matches at least n and at most m occurrences of the preceding item x.
// "cndy".match(/a{1,3}/) ➞ null
// "candy".match(/a{1,3}/) ➞ "a"
// "caandy".match(/a{1,3}/) ➞ "aa"
// "caaaaaaaaaaandy".match(/a{1,3}/) ➞ "aaa"
// Create a RegExp to find ellipsis: 3 (or more?) dots in a row. Use one of the 3 quantifiers above in your solution.
// "Hello!... Wait. How goes?..... GoodBye!..".match(/REGEXP/g) ➞ "..., ....."
// console.log('Hello!... Wait. How goes?..... GoodBye!..'.match(/\.{3,}/g));
// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Examples
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4
// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.
// function countVowels(str) {
//  return str.match(/[aeiou]/g).length;
// }
// console.log(countVowels('Celebration'));
// console.log(countVowels('Palm'));
// console.log(countVowels('Prediction'));
// Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.
// Examples
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"
// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// Notes
// "y" is not considered a vowel.
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '').trim();
}
// console.log(removeVowels('I have never seen a thin person drinking Diet Coke.'));
// console.log(removeVowels("We're gonna build a wall!"));
// console.log(removeVowels('Happy Thanksgiving to all--even the haters and losers!'));
// Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.
// Examples
// firstVowel("apple") ➞ 0
// firstVowel("hello") ➞ 1
// firstVowel("STRAWBERRY") ➞ 3
// firstVowel("pInEaPPLe") ➞ 1
// Notes
// Input will be single words.
// Characters in words will be upper or lower case.
// "y" is not considered a vowel.
// Input always contains a vowel.
// function firstVowel(str) {
//  return str.search(/[aeiou]/i);
// }
// console.log(firstVowel('apple'));
// console.log(firstVowel('hello'));
// console.log(firstVowel('STRAWBERRY'));
// console.log(firstVowel('pInEaPPLe'));
// Find the Bomb
// Create a function that finds the word "bomb" in the given string. If found, return "Duck!!!", otherwise return "There is no bomb, relax.".
// Examples
// bomb("There is a bomb.") ➞ "Duck!!!"
// bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"
// bomb("This goes boom!!!") ➞ "There is no bomb, relax."
// Notes
// "bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).
// function bomb(str) {
//  let relax = 'There is no bomb, relax.';
//  return /bomb/.test(str) ? 'Duck!!!' : relax;
// }
// console.log(bomb('There is a bomb.'));
// console.log(bomb('Hey, did you think there is a bomb?'));
// console.log(bomb('This goes boom!!!'));
// Regex Series: Even Number?
// Write a regular expression that matches only an even number. Numbers will be presented as strings.
// Examples
// "2341" ➞ false
// "132" ➞ true
// "29" ➞ false
// "5578" ➞ true
// console.log(/[02468]$/.test('2341'));
// console.log(/[02468]$/.test('132'));
// console.log(/[02468]$/.test('29'));
// console.log(/[02468]$/.test('5578'));
// Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.
// Examples
// hashPlusCount("###+") ➞ [3, 1]
// hashPlusCount("##+++#") ➞ [3, 3]
// hashPlusCount("#+++#+#++#") ➞ [4, 6]
// hashPlusCount("") ➞ [0, 0]
// Notes
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
function hashPlusCount(str) {
    return [(str.match(/#/g) || []).length, (str.match(/\+/g) || []).length];
}
// console.log(hashPlusCount('###+'));
// console.log(hashPlusCount('##+++#'));
// console.log(hashPlusCount('#+++#+#++#'));
// console.log(hashPlusCount(''));
// Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
// Examples
// isValid("59001") ➞ true
// isValid("853a7") ➞ false
// isValid("732 32") ➞ false
// isValid("393939") ➞ false
// function isValid(str) {
//  return /^\d{5}$/g.test(str);
// }
// console.log(isValid('59001'));
// console.log(isValid('853a7'));
// console.log(isValid('732 32'));
// console.log(isValid('393939'));
// Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:
// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.
// Examples
// fixImport("import object from module_name") ➞ "from module_name import object"
// fixImport("import randint from random") ➞ "from random import randint"
// fixImport("import pi from math") ➞ "from math import pi"
function fixImport(str) {
    return str.replace(/(import \w+) (from \w+)/gi, '$2 $1');
}
console.log(fixImport('import object from module_name'));
console.log(fixImport('import randint from random'));
console.log(fixImport('import pi from math'));