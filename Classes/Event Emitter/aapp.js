class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];
        return this.events[eventName].map(callback => callback(...args));
    }
}
const emitter = new EventEmitter();
function cb1() { return 5; }
const sub = emitter.subscribe("event1", cb1);

console.log(emitter.emit("event1")); // [5]
sub.unsubscribe();
console.log(emitter.emit("event1")); // []
class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];
        return this.events[eventName].map(callback => callback(...args));
    }
}
const emitter = new EventEmitter();
function cb1() { return 5; }
const sub = emitter.subscribe("event1", cb1);

console.log(emitter.emit("event1")); // [5]
sub.unsubscribe();
console.log(emitter.emit("event1")); // []
