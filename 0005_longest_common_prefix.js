// Q. Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}
 */
var _longestCommonPrefix = function (strs) {
    let res = '';
    outerLoop:
    for (let outer = 0; true; outer++) {
        let letter = null;
        innerLoop:
        for (let inner = 0; inner < strs.length; inner++) {
            if (letter == null) {
                letter = strs[inner][outer]
            }
            if (strs[inner][outer] != letter || strs[inner][outer] == undefined) {
                break outerLoop;
            }
        }
        res += letter;
    }
    return res
};

// patter 2
var _longestCommonPrefix = function (strs) {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    console.log(prefix)
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix == '') return "";
        }
    return prefix;
};


// patter 3
var _longestCommonPrefix = function (strs) {
    if (strs == null || strs.length == 0) return "";
    for (let i = 0; i < strs[0].length ; i++) {
        let c = strs[0].charAt(i);
        console.log(c);
        for (let j = 1; j < strs.length; j++) {
            if (i == strs[j].length || strs[j].charAt(i) != c)
                return strs[0].substring(0, i);
        }
    }
    return strs[0];
};


// patter 4
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) { return ''; }

    let matchResult = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let regexPattern = '';
        for (const char of strs[i]) {
            regexPattern += `${char}?`;
        }

        let regex = new RegExp(`^${regexPattern}`, 'g');
        matchResult = matchResult.match(regex)[0];
        console.log(matchResult, regex);
    }
    return matchResult;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["c", "acc", "ccc"])); // "c"