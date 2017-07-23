'use strict';

var EventEmitter = require("events");

class DoSomething extends EventEmitter {
    constructor() {
        super();
        this.someData = "This is some data in the DoSomething object";
    }

    doSomething() {
        console.log(this.someData);
        this.emit("didsomething");
    }
}

var ds = new DoSomething();
ds.on("didsomething", function() {
    console.log("didsomething event was triggered");
});

ds.doSomething();
