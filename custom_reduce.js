// custom filter
Array.prototype.custom_reduce = function custom_reduce(cb, init_val) {
    let is_init_val = typeof init_val == 'undefined';
    let accu = is_init_val ? this[0] : init_val;

    for (let i = is_init_val ? 1 : 0; i < this.length; i++) {
        accu = cb(accu, this[i], i, this);
    }
    return accu;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let output = arr.custom_reduce(function callBack(accu, curr, index, arr) {
    return accu + curr;
}, 5)
console.log(output)


console.log(arr.reduce(function callBack(accu, curr, index, arr) {
    return accu + curr;
}, 5));