function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(event, eventListener) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(eventListener);
};

Emitter.prototype.emit = function(event, parameters) {
    if(this.events[event]) {
        this.events[event].forEach(function(eventListener) {
            eventListener(parameters);
        });
    }
};

module.exports = new Emitter;