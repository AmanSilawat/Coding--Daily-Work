// custom every
Array.prototype.custom_some = function custom_some(cb) {
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if (res == true) {
            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let output = arr.custom_some(function callBack(curr, index, arr) {
    return curr == 5;
}, 5)
console.log(output)


console.log(arr.some(function callBack(curr, index, arr) {
    return curr == 5;
}));