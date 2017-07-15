const EventEmitter = require("events");
const emtr = new EventEmitter();

emtr.once("testevent", function() {
    console.log("I'm triggered only once");
});

emtr.on("testevent", function() {
    console.log("test event triggered");
});

emtr.on("testevent", function(params) {
    console.log("test event triggered and the params are - ", params);
});

emtr.emit("testevent");

emtr.emit("testevent", {
    "prop1" : "prop1value",
    "prop2" : "prop2value"
});