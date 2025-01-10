var argumentsLength = function (...args) {
    return args.length
};
args = [];
let result = argumentsLength(...args);
console.log(result);


/*
 * argumentsLength(1, 2, 3); // 3
 */