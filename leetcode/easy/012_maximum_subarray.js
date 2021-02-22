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


let maxSubArray = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    } else if (nums.length == 2) {
        let posOrNeg = nums[0] < 0 || nums[1] < 0 ? 'neg' : 'pos';
        let n1 = Math.abs(nums[0]);
        let n2 = Math.abs(nums[1]);
        let sum;
        if (posOrNeg == 'neg') {
            sum = n1 - n2;
        } else {
            sum = n1 + n2;
        }
        console.log(sum)

        return nums[0] < 0 && nums[1] < 0 ? Number(`-${Math.abs(sum)}`) : sum;
    }

    let maxSum = -Infinity;
    console.log(nums.length)
    for (let len = 2; len < nums.length + 1; len++) {
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

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([-2, 1])); // 1
// console.log(maxSubArray([-2, -1])); // -1
// console.log(maxSubArray([-1, -2])); // -1
console.log(maxSubArray([-1, 0])); // 0

