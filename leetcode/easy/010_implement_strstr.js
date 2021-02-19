/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Runtime: 68 ms, faster than 98.58%
// Memory Usage: 38.8 MB, less than 62.01%
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
};

console.log(strStr("hello", "ll"))
