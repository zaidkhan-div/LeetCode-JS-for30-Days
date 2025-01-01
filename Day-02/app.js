// Problem to solve 

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// var createCounter = function (n) {
//     return function () {
//         console.log(n++);
//     };
// };

// let counter = createCounter(10)
// counter() // 10
// counter() // 11
// counter() // 12
// counter() // 13

var createCounter = function(n) {
    return function() {
        return n++;  // Return the current value of n and then increment it
    };
};
let counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
