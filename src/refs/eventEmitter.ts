import EventEmitter from "events";

// * create class
class MyEmitter extends EventEmitter {}

// * init object
const myEmitter = new MyEmitter();

// * event listener
myEmitter.on("some", () => console.log("Some event fired!"));

// * emit event
myEmitter.emit("some");
myEmitter.emit("some");
myEmitter.emit("some");
myEmitter.emit("some");
