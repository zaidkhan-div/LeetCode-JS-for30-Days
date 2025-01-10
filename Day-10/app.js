var once = function(fn) {
    let called = false; // Flag to check if the function was already called
    return function(...args) {
        if (!called) {
            called = true; // Set the flag to true on the first call
            return fn(...args); // Call the original function and return its result
        }
        return undefined; // Return undefined on subsequent calls
    };
};

// Example Usage:
const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); 
console.log(onceFn(2, 3, 6)); 
