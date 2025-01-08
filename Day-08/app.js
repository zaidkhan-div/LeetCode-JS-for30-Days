// var compose = function (functions) {
//     return function (x) {
//         console.log(x);

//     }
// };
// functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// let fn = compose(functions)
// console.log(fn);


var compose = function (functions) {
    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

functions = [x => x + 1, x => x * x, x => 2 * x];
x = 4;
let fn = compose(functions);
console.log(fn(x));

// Function Composition:

// Composition means applying the functions from right to left.
// For the input x = 4:
// Start with x = 4.
// Apply the last function: 2 * x = 8.
// Apply the second-to-last function: 8 * 8 = 64.
// Apply the first function: 64 + 1 = 65.

// Steps in the Code:

// reduceRight: This method starts from the end of the array and applies a reducer function to combine elements.
// reduceRight((acc, fn) => fn(acc), x):
// acc starts with the value of x (initial input).