var chunk = function(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};
console.log(chunk([1,2,3,4,5], 1)); // [[1],[2],[3],[4],[5]]
console.log(chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]
console.log(chunk([1,2,3,4,5,6], 3)); // [[1,2,3],[4,5,6]]
console.log(chunk([], 2)); // []
