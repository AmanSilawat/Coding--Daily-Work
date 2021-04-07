// ! Length of a Nested Array

function getLength(array) {
    return array.flat(Infinity).length;
}

console.log(getLength([1, [2, 3]])); // 3
console.log(getLength([1, [2, [3, 4]]])); // 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // 6
console.log(getLength([1, [2], 1, [2], 1])); // 5