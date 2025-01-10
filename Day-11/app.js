function memoize(fn) {
    const cache = new Map(); // Cache to store function results

    return function(...args) {
        const key = args.join(','); // Create a unique key based on arguments
        if (cache.has(key)) {
            return cache.get(key); // Return cached value if it exists
        }
        const result = fn(...args); // Call the original function
        cache.set(key, result); // Cache the result
        return result;
    };
}
