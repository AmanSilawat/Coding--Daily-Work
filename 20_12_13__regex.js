// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.
// Examples
// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// Notes
// Keep the original relative order of the upper and lower case letters the same.

function capToFront(str) {
    let smallLetter = '';
    return str.replace(/([a-z]+)/g, function(grp, g1) {
        smallLetter += g1;
        return '';
    }).concat(smallLetter);

    // return str.match(/[A-Z]+/g).join('') + str.match(/[a-z]+/g).join('');
}

console.log(capToFront("hApPy")); // "APhpy"
console.log(capToFront("moveMENT")); // "MENTmove"
console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"