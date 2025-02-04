var flat = function(arr, n) {
    if (n === 0) return arr;

    let result = [];

    function flatten(array, depth) {
        for (let item of array) {
            if (Array.isArray(item) && depth > 0) {
                flatten(item, depth - 1); 
            } else {
                result.push(item);
            }
        }
    }

    flatten(arr, n);
    return result;
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
// Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

console.log(flat([1, [2, [3, [4, 5]]]], 2));
