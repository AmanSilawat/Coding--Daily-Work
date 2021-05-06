// Sort stack
// Input:  -3  <--- Top
//         14
//         18
//         -5
//         30
// Output: 30  <--- Top
//         18
//         14
//         -3
//         -5
// ===operation allowed===
// pop()
// push()
// top()/peek()
// isEmpty() / st.length == 0

const stack = [30, -5, 18, 14, -3];

Array.prototype.top = function () {
    return this[this.length - 1];
}

function sort_stack_(stack, temp_arr = [], n_by_n_iteration = 0) {
    if (stack.length == 0) {
        console.log('temp_arr-----end', temp_arr)
        console.log('stack-----end', stack)
        return stack;
    }

    if (stack.length >= 2) {
        const first_top_val = stack.pop();


        // pass big value in the temp array
        console.log(first_top_val, stack.top(), 'condition')
        if (first_top_val < stack.top()) {
            temp_arr.push(first_top_val);
        } else {
            temp_arr.push(stack.pop());
            stack.push(first_top_val);
        }

        console.log('temp_arr', temp_arr);
        console.log('stack', stack);
        console.log('\n');
    } else {
        n_by_n_iteration++;
        let combine_arr = [...temp_arr, ...stack];
        console.log('end--------------------------------------', n_by_n_iteration, combine_arr)
        if (combine_arr.length - 1 == n_by_n_iteration) {
            return 'the end-----------------------------------------'
        }
        return sort_stack(combine_arr, [], n_by_n_iteration);
    }
    // return stack
    return sort_stack(stack, temp_arr, n_by_n_iteration);
}

function sort_stack__(stack, temp_arr = [], n_by_n_iteration = 0) {
    if (stack.length == 0) {
        console.log('------------end', stack, temp_arr, n_by_n_iteration, 'n_by_n_iteration != temp_arr.length-1', n_by_n_iteration, temp_arr.length - 1)

        if (n_by_n_iteration == 10) {
            return;
        }
        if (n_by_n_iteration != temp_arr.length - 1) {
            return sort_stack(temp_arr, [], ++n_by_n_iteration)
        } else {
            return stack;
        }
    }
    let a = stack.pop();
    let b = stack.pop();
    let c = stack.pop();
    console.log(a, b, c)

    if (typeof c == 'undefined' && typeof b == 'undefined') {
        temp_arr.push(a);
    } else if (typeof c == 'undefined') {
        if (a > b) {
            temp_arr.push(a, b)
        } else {
            temp_arr.push(b, a)
        }
    } else {
        if (a > b && a > c) {
            temp_arr.push(a);
            stack.push(c, b)
        } else if (b > c) {
            temp_arr.push(b)
            stack.push(c, a)
        } else {
            temp_arr.push(c)
            stack.push(b, a)
        }
    }


    console.log('temp_arr', temp_arr)
    console.log('stack', stack)
    console.log('\n')
    return sort_stack(stack, temp_arr, n_by_n_iteration)
}

function sort_stack(stack, iteration = stack.length - 1, pivot = stack.pop(), right = []) {
    if (stack.length == 0) {
        let stack_result = [pivot, ...right];
        if (iteration == 0) {
            return stack_result;
        } else {
            return sort_stack(stack_result, --iteration);
        }
    }

    if (pivot < stack.top()) {
        right = [stack.pop(), ...right]
    } else {
        right = [pivot, ...right];
        pivot = stack.pop();
    }

    return sort_stack(stack, iteration, pivot, right);
}

console.log(sort_stack(stack))


// temp = [-3, 14, 18, -5, 10]  - pop 10
// arr = [-3, 14, 18, -5]       - top -5
// sort= [-5]

// temp = [-3, 14, 18, -5, 10]  - pop 10
// arr = [-3, 14, 18]           - top 18
// sort= [-5, 10]

// temp = [-3, 14, 18, -5, 10]  - pop 10
// arr = [-3, 14]               - top 14
// sort= [-5, 10, 10]

// temp = [-3, 14, 18, -5, 10]  - pop 10
// arr = [-3]                   - top -3
// sort= [-5, 10, 10, -3]



// --------------------

//   i                          j
// [-3, 14, 18, -5, 30]    [-3, 14, 18, -5, 30]

//   i                               j
// [-3, 14, 18, -5, 30]    [-3, 14, 18, -5, 30]

//   i                                   j
// [-3, 14, 18, -5, 30]    [-3, 14, 18, -5, 30]

//   i                                       j
// [-3, 14, 18, -5, 30]    [-3, 14, 18, -5, 30]

// --------------------

// first set 
// [-3, 14, 18, -5, 30]
// [-3, 14, 18, 30, -5]

// [-3, 14, 18, 30, -5]
// [-3, 14, 18, 30, -5]

// [-3, 14, 18, 30, -5]
// [-3, 14, 18, 30, -5]

// [-3, 14, 18, 30, -5]
// [14, 18, 30, -5, -3]

// second set
// [14, 18, 30, -5, -3]
// [14, 18, 30, -5, -3]

// [14, 18, 30, -5, -3]
// [14, 18, 30, -5, -3]

// [14, 18, 30, -5, -3]
// [14, 18, 30, -5, -3]