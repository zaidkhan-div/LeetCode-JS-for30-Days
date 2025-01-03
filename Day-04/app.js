var createCounter = function (init) {
    console.log(init);

    return {
        increment: function () {
            init++
        },
        decrement: function () {
            init--
        },
        reset: function () {
            init == init
        },
    }
};


const counter = createCounter(5);
counter.increment()
counter.increment()

// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4