const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
const hi = () => {
  console.log("Hello, world!");
};
myEmitter.addListener("hello", hi);
myEmitter.removeListener("hello", hi);

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("hello", () => {
  console.log("Hello, world!");
});
myEmitter.once("hello", () => {
  console.log("Hello, world!");
});
myEmitter.removeListener("hello", () => {
  console.log("Hello, remove!");
});
myEmitter.emit("hello");
