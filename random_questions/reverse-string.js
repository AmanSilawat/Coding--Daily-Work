// pattern 1: Reverse a String With Built-In Functions
function reverseString_(str) {
    return str.split("").reverse().join("");
}

// pattern 2: Reverse a String With a Decrementing For Loop
function reverseString__(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// pattern 2: Reverse a String With Recursion
function reverseString(str) {
    if (str == '') return '';

    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
