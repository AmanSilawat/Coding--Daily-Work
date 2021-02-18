/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// not for all case
var removeElement = function (nums, val) {
    let i;
    let len = 0;
    for (let j = 0; j < nums.length; j++) {
        if (val == nums[j]) {
            i = j;
            len++;
        }

        if (i != null && val != nums[j]) {
            nums[i] = nums[j];
            nums[j] = 0;
            i = j;
        }
    }
    return len
};

// Runtime: 72 ms, faster than 95.75 %
// Memory Usage: 38.6 MB, less than 58.70 %
var removeElement = function (nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (val != nums[j]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

let arr = [3, 2, 2, 3]; // val: 3              --output: [2, 2]
let arr_ = [0, 1, 2, 2, 3, 0, 4, 2] // val: 2  --output: [0,1,4,0,3]
console.log(removeElement(arr, 3));
console.log(arr)