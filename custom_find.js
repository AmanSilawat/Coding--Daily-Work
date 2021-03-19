// custom every
Array.prototype.custom_find = function custom_find(cb) {
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if (res == true) {
            return this[i];
        }
    }
    return undefined;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let output = arr.custom_find(function callBack(curr, index, arr) {
    return curr == 4;
}, 5)
console.log(output);


console.log(arr.find(function callBack(curr, index, arr) {
    return curr == 4;
}));