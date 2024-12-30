let para = document.getElementById('para')


var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

const f = createHelloWorld();
console.log(f());

para.innerHTML = `${f()}`