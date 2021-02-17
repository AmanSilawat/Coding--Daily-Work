/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 96 ms, faster than 69.58 % 
// Memory Usage: 40.9 MB, less than 69.15 % 
var removeDuplicates_ = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] == nums[i]) {
            nums.splice(i, 1)
            i--;
        }
    }
    return nums.length;
};

// Runtime: 84 ms, faster than 97.00 %
// Memory Usage: 41.4 MB, less than 20.83 %
var removeDuplicates = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

let arr_ = [1, 1, 2];
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(arr))
console.log(arr) // [ 0, 1, 2, 3, 4, 2, 2, 3, 3, 4]