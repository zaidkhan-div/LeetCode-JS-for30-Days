/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function(nums, fn, init) {
    let result = init; 
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]); 
    }
    return result; 
};

// Example Usage:
let nums = [1, 2, 3, 4];
let fn = (acc, curr) => acc + curr;
let init = 0;

let output = reduce(nums, fn, init);
console.log(output); // Output: 10
document.write(output)