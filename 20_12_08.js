// There are three methods (exclude compile) that you can use with regular expression literals. Use these two methods to fix the code. One method returns a boolean if there is a match. The other method returns an iterator from a search.
// Notes
// Do not use the same method twice.
// Do not use String methods that accept regular expresssions as arguments.
function twoMethods() {
	// find and equals are not regular expression methods.  Replace them. 
	let methodOne = /hello/.match("hello")[0] === "hello" 
	let methodTwo = /hello/.test("hello") // returns a boolean
	return methodOne && methodTwo
}
// exec
// test
// match



// RegEx: Character Classes IX ⁠- \w
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here is a list of the character classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden word in this string:
const str = "**^&$Regular#$%Expressions$%$$%^**"
// Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.
const REGEXP = /[^\w]+/g;
// console.log( str.replace(REGEXP, ' ').trim() );
// console.log( str.match(REGEXP).join(' ') );





// Regex Series: String Contains at Least One Digit
// Write a regular expression that matches a string if it contains at least one digit.
// Examples
// "c8" ➞ true
// "23cc4" ➞ true
// "abwekz" ➞ false
// "sdfkxi" ➞ false
// Notes
// This challenge is designed to use RegEx only.

// console.log( /\d/g.test('sdfkxi') );




// RegEx: Special Characters
// Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.
// Examples

function asterisk(str) {
    return /a.*c/g.test(str);
}

// console.log( asterisk("account") ) // true
// console.log( asterisk("abccount") ) // true
// console.log( asterisk("abbbccount") ) // true
// console.log( asterisk("bbbccount") ) // false
// console.log( asterisk("bbbccouna") ) // false




// Retrieve the Subreddit
// Create a function to extract the name of the subreddit from its URL.
// Examples
function subReddit(str) {
// return str.match(/\w+\/?$/g)[0].split('/')[0];
return str.match(/\/\w+\/?$/g)[0].replace(/\//g, '');
}

// 'https://www.reddit.com/r/funny/'.replace(/\w.*com/, '')

console.log( subReddit("https://www.reddit.com/r/adfadf/funny/") ) // "funny"
console.log( subReddit("https://www.reddit.com/r/relationships/") ) // "relationships"
console.log( subReddit("https://www.reddit.com/r/mildlyinteresting/") ) // "mildlyinteresting"
console.log( subReddit("https://www.reddit.com/r/mildlyinteresting/moien") ) // "moien"

