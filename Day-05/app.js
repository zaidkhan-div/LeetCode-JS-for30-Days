/*
param {number[]} arr
param {Function} fn
param {number[]}
*/

var map = function(arr, fn) {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); 
    }
    return result;
};

const arr = [1, 2, 3];
const plusOne = function(n) { return n + 1; };

const newArray = map(arr, plusOne); 
console.log(newArray);
