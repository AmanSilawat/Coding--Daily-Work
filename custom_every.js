// custom every
Array.prototype.custom_every = function custom_every(cb) {
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if (res != true) {
            return false;
        }
    }
    return true;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [5, 5, 5];
let output = arr.custom_every(function callBack(curr, index, arr) {
    return curr == 5;
}, 5)
console.log(output)


console.log(arr.every(function callBack(curr, index, arr) {
    return curr == 5;
}));