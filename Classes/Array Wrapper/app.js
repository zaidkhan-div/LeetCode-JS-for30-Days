class ArrayWrapper {
    constructor(nums) {
        this.nums = nums; 
    }

    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    toString() {
        return `[${this.nums.join(",")}]`;
    }
}

// Example Usage:
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
