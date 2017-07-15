var emitter = require("./eventemitter");
emitter.on("someevent", function() {
    console.log("someevent has been emitted");
});
emitter.on("someevent", function(params) {
    console.log("someevent has been emitted and I check for parameters", params);
});

emitter.emit("someevent");
emitter.emit("someevent", {
    "a" : "b",
    "c" : "d"
});