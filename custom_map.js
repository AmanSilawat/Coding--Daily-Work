// custom_map
Array.prototype.custom_map = function custom_map(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        temp.push(res);
    }
    return temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let output = arr.custom_map(function callBack(currentVal) {
    return currentVal + 2;
})
console.log(output)
