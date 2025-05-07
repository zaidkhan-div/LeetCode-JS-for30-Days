// To Be Or Not To Be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".

// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".




var expect = function (val) {
    return {
        toBe: function (expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (expected) {
            if (val !== expected) {
                return true;
            } else {
                return false
            }
        }
    };
};


var try1 = expect(5).toBe(5);      
var try2 = expect(8).notToBe(7);   


console.log(try1);
console.log(try2);



