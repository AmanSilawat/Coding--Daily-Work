function dist_tower(arr) {
    // Write your code here
    const n = arr.length;
    let max = n;

    const stack = [];
    let res = [[]];

    for (let i = 0; i < n; i++) {
        stack.push(arr[i]);

        while (stack.top() == max) {
            let top_stack_val = stack.pop();
            res[res.length - 1].push(top_stack_val);
            max--;
        }

        res.push([]);
    }

    return res;
}

Array.prototype.top = function getTopStack() {
    return this[this.length - 1];
}

// ! first input
// ========================

var out_ = dist_tower([4, 5, 1, 2, 3]);
for (i_out_ = 0; i_out_ < out_.length; i_out_++) {
    process.stdout.write(out_[i_out_].join(' '));
    process.stdout.write('\n');
}

/* output: 
5 4
3 2 1

*/
