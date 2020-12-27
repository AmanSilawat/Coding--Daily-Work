Array.prototype.myReduce = function get_value(fn, acc = this.shift()) {
    if (this.length == 0) {
        return acc;
    }
    acc = fn(acc, this.shift());
    return this.myReduce(fn, acc);
}

function addtion(acc, currVal) {
    return acc * currVal;
}

let res = [1, 2, 3, 4].myReduce(addtion);
console.log(res);