var cancellable = function (fn, args, t) {
    fn(...args);

    let intervalId = setInterval(() => fn(...args), t);

    return () => clearInterval(intervalId);
};

const fn = (x) => console.log(x * 5);
const args = [2];
const t = 20;
const cancelTimeMs = 100;

const cancelFn = cancellable(fn, args, t);

setTimeout(cancelFn, cancelTimeMs);
