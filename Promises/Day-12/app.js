var addTwoPromises = async function (promise1, promise2) {
    promise1 = await promise1;
    promise2 = await promise2;
    return promise1 + promise2;
};
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
// in the last 20,60 is milliSecond

const result = addTwoPromises(promise1, promise2);
console.log(result);
