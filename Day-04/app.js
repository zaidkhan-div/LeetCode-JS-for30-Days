


// var createCounter = function (init) {

//     // console.log(init);
//     let n = init;
//     return {
//         increment: function () {
//             console.log(++n);
            
//         },
//         reset: function () {
//             console.log(n=init);
//         },
//         decrement: function () {
//             console.log(--n);
//         },
      
//     }
// };


// const counter = createCounter(5);
// counter.increment()
// counter.reset()
// counter.decrement()

// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

var createCounter = function (init) {
    let n = init;
    return {
        increment: function () {
           return ++n
        },
        reset: function () {
          return  n = init
        },
        decrement: function () {
           return --n
        }
        
    }
};
const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())