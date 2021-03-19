// custom filter
Array.prototype.custom_filter = function custom_filter(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if (res == true) {
            temp.push(this[i]);
        }
    }
    return temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let output = arr.custom_filter(function callBack(currentVal) {
    return currentVal % 2 == 0;
})
console.log(output)

// custom_filter,
// custom_map,
// custom_reduce,
// custom_every,
// custom_some,
// custom_find,
// custom_findIndex,