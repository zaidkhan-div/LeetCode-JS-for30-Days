var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// Example Usage
const arr = [5, 4, 1, 2, 3];
const fn = (x) => x;

console.log(sortBy(arr, fn)); 
// Output: [1, 2, 3, 4, 5]
