var cancellable = function (fn, args, t) {
    let timeoutId;
    const cancelFn = () => {
        clearTimeout(timeoutId);
    };

    timeoutId = setTimeout(() => {
        const result = fn(...args);
    }, t);

    return cancelFn; 
};

const fn = (x) => x * 5;
const args = [2];
const cancelTimeMs = 50;
const cancelFn = cancellable(fn, args, 20);

setTimeout(cancelFn, cancelTimeMs);



