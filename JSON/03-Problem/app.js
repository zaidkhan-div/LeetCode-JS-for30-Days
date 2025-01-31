Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};


console.log([null, {}, 3].last());
console.log([1, 2, 3, 4, 5].last()); 5
console.log([].last());
