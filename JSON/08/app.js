var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject); 
    } else if (typeof obj === "object" && obj !== null) {
        let result = {};
        for (let key in obj) {
            let value = compactObject(obj[key]); 
            if (Boolean(value)) {
                result[key] = value;
            }
        }
        return result;
    }
    return obj;
};

console.log(compactObject([null, 0, false, 1]));
// Output: [1]

console.log(compactObject({ a: null, b: [false, 1], c: { d: 0, e: "hello" } }));
// Output: { b: [1], c: { e: "hello" } }

console.log(compactObject({ x: 0, y: "", z: { a: NaN, b: "ok" }, w: [null, 2] }));
// Output: { z: { b: "ok" }, w: [2] }
