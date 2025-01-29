var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

console.log(isEmpty({ "x": 5, "y": 42 })); // false
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
console.log(isEmpty([1, 2, 3])); // false
