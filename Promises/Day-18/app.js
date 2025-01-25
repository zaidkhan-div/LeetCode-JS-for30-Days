var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (functions.length === 0) {
            resolve(results); // Resolve immediately if the array is empty
            return;
        }

        functions.forEach((fn, index) => {
            fn()
                .then((value) => {
                    results[index] = value; // Store the resolved value at the correct index
                    completed++;

                    if (completed === functions.length) {
                        resolve(results); // Resolve when all promises are completed
                    }
                })
                .catch((err) => {
                    reject(err); // Reject immediately on the first failure
                });
        });
    });
};

const asyncFunctions = [
    () => new Promise((res) => setTimeout(() => res(1), 100)),
    () => new Promise((res) => setTimeout(() => res(2), 200)),
    () => new Promise((res) => setTimeout(() => res(3), 50)),
];

promiseAll(asyncFunctions)
    .then((results) => console.log(results)) // [1, 2, 3]
    .catch((err) => console.error(err));
