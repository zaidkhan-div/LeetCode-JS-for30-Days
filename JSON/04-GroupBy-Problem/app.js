Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
    }, {});
};

// Example Usage
const array = [
  { "id": "1" },
  { "id": "1" },
  { "id": "2" }
];

const fn = item => item.id;

console.log(array.groupBy(fn)); 
// Output: { "1": [{ "id": "1" }, { "id": "1" }], "2": [{ "id": "2" }] }
