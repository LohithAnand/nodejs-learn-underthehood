var EventEmitter = require("events");
var util = require("util");

//my function constructor
function DoSomething() {
    EventEmitter.call(this);
    this.someData = "This is some data in the DoSomething object";
}

util.inherits(DoSomething, EventEmitter);

DoSomething.prototype.doSomething = function() {
    console.log(this.someData);
    this.emit("didsomething");
}

var ds = new DoSomething();
ds.on("didsomething", function() {
    console.log("didsomething event was triggered");
});

ds.doSomething();
