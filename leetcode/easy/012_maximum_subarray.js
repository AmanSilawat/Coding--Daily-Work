/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray_ = function (nums) {
    return nums.reduce((acc, val, arr) => {
        return acc + val
    })
};

let maxSubArray__ = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    let maxSum = -Infinity;
    for (let len = 2; len < nums.length; len++) {
        console.log(len)
        for (let j = 0; j < nums.length - len + 1; j++) {
            let arr = nums.slice(j, j + len)
            let sum = arr.reduce((acc, val) => acc + val)
            console.log(JSON.stringify(arr), ' = ', sum)
        }
    }
};


let maxSubArray___ = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    // else if (nums.length == 2) {

    //     let posOrNeg = nums[0] < 0 || nums[1] < 0 ? 'neg' : 'pos';
    //     let n1 = Math.abs(nums[0]);
    //     let n2 = Math.abs(nums[1]);
    //     let sum;
    //     if (posOrNeg == 'neg') {
    //         sum = n1 - n2;
    //     } else {
    //         sum = n1 + n2;
    //     }
    //     console.log(sum)

    //     return nums[0] < 0 && nums[1] < 0 ? Number(`-${Math.abs(sum)}`) : sum;
    // }

    let maxSum = -Infinity;
    console.log(nums.length)
    for (let len = 1; len < nums.length + 1; len++) {
        console.log(len)
        for (let j = 0; j < nums.length - len + 1; j++) {
            let arr = nums.slice(j, j + len)
            let sum = arr.reduce((acc, val) => acc + val)
            console.log(JSON.stringify(arr), ' = ', sum, ' , MaxSum = ', maxSum)
            if (maxSum < sum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
};


let maxSubArray____ = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    let max_so_far = max_ending_here = 0;
    let negative = 0;

    for (let i = 0; i < nums.length; i++) {
        max_ending_here = max_ending_here + nums[i]

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here
        }

        // if (max_so_far > max_ending_here) {
        //     negative = max_ending_here;
        // }

        if (max_ending_here < 0) {
            max_ending_here = 0
        }

    }

    return max_so_far;
}


// Runtime: 92 ms, faster than 43.04 %
// Memory Usage: 39.4 MB, less than 26.12 %
let maxSubArray_____ = function (nums) {
    let res = nums[0];
    let tot = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum = tot + nums[i];
        if (nums[i] > sum) {
            tot = nums[i];
        } else {
            tot = sum
        }

        if (res > tot) {
            res = res
        } else {
            res = tot;
        }
    }
    return res;
}

// Runtime: 84 ms, faster than 76.91 % 
// Memory Usage: 39.2 MB, less than 47.38 % 
let maxSubArray = function (nums) {
    let res = nums[0];
    let tot = nums[0];

    for (let i = 1; i < nums.length; i++) {
        tot = Math.max(nums[i], tot + nums[i]);
        res = Math.max(res, tot);
    }

    return res;
}



console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, 1])); // 1
console.log(maxSubArray([-2, -1])); // -1
console.log(maxSubArray([5, -10, 10])); // 10
console.log(maxSubArray([5, 10])); // 15
console.log(maxSubArray([-2, -1])); // -1