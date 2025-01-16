// var timeLimit = function (fn, t) {

//     return async function (...args) {

//     }
// };

// fn = async (n) => {
//     await new Promise(res => setTimeout(res, 100))
//     return n * n
// }
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timer); 
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timer); 
                    reject(error);
                });
        });
    };
};

fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};

const limitedFn = timeLimit(fn, 50);

limitedFn(5).then(console.log).catch(console.error); 
