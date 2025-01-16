// class TimeLimitedCache {
//     constructor() {
//         this.cache = new Map(); 
//     }

//     set(key, value, duration) {
//         const currentTime = Date.now();
//         const isKeyExists = this.cache.has(key) && this.cache.get(key).expires > currentTime;

//         this.cache.set(key, { value, expires: currentTime + duration });

//         setTimeout(() => {
//             if (this.cache.has(key) && this.cache.get(key).expires <= Date.now()) {
//                 this.cache.delete(key);
//             }
//         }, duration);

//         return isKeyExists;
//     }

//     get(key) {
//         const currentTime = Date.now();
//         if (this.cache.has(key) && this.cache.get(key).expires > currentTime) {
//             return this.cache.get(key).value;
//         }
//         return -1; 
//     }

//     count() {
//         const currentTime = Date.now();
//         let activeKeys = 0;

//         for (const [key, { expires }] of this.cache.entries()) {
//             if (expires > currentTime) {
//                 activeKeys++;
//             } else {
//                 this.cache.delete(key); 
//             }
//         }

//         return activeKeys;
//     }
// }


// const actions = ["TimeLimitedCache", "set", "get", "count", "get"];
// const values = [[], [1, 42, 100], [1], [], [1]];
// const timeDelays = [0, 0, 50, 50, 150];

// const results = [];
// const cache = new TimeLimitedCache();

// actions.forEach((action, index) => {
//     const delay = timeDelays[index];
//     setTimeout(() => {
//         if (action === "TimeLimitedCache") {
//             results.push(null);
//         } else if (action === "set") {
//             results.push(cache.set(...values[index]));
//         } else if (action === "get") {
//             results.push(cache.get(...values[index]));
//         } else if (action === "count") {
//             results.push(cache.count());
//         }
//     }, delay);
// });

// setTimeout(() => console.log(results), Math.max(...timeDelays) + 10);


class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const exists = this.cache.has(key) && this.cache.get(key).expiration > Date.now();

        if (this.cache.has(key)) {
            clearTimeout(this.cache.get(key).timeoutId); // Clear any existing timeout
        }

        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, expiration: Date.now() + duration, timeoutId });

        return exists;
    }

    get(key) {
        if (this.cache.has(key) && this.cache.get(key).expiration > Date.now()) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    count() {
        const now = Date.now();
        let count = 0;

        for (const [key, { expiration }] of this.cache) {
            if (expiration > now) {
                count++;
            }
        }

        return count;
    }
}

// Example usage:
const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 100)); // false
console.log(cache.get(1));         // 42
setTimeout(() => console.log(cache.count()), 50); // 1
setTimeout(() => console.log(cache.get(1)), 150); // -1
