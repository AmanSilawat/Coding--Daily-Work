// custom every
Array.prototype.custom_findIndex = function custom_findIndex(cb) {
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if (res == true) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// custom findIndex
let output = arr.custom_findIndex(function callBack(curr, index, arr) {
    return curr == 10;
}, 5)
console.log(output)


// original findIndex
console.log(arr.findIndex(function callBack(curr, index, arr) {
    return curr == 10;
}));