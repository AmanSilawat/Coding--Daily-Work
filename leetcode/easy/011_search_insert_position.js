/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Runtime: 76 ms, faster than 82.18 %
// Memory Usage: 38.8 MB, less than 50.86 % 
var searchInsert = function (nums, target) {
    let index = nums.indexOf(target);
    if (index != -1) {
        return index;
    }

    let i = 0;
    while (i < nums.length) {
        if (target < nums[i]) {
            return i;
        }
        i++;
    }
    return i;
};

// first time
// Runtime: 80 ms, faster than 82.18%
// Memory Usage: 38.7 MB, less than 21.63%

// second time
// Runtime: 80 ms, faster than 58.33%
// Memory Usage: 38.7 MB, less than 50.86%
var searchInsert = function (nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (target == nums[i] || target < nums[i]) {
            return i;
        }
        i++;
    }
    return i;
};

console.log(searchInsert([1, 3, 5, 6], 2))