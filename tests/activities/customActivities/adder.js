var util = require("util");
var Activity = require("../../../").activities.Activity;
var _ = require("lodash");

function Adder() {
    Activity.call(this);
}

util.inherits(Adder, Activity);

Adder.prototype.run = function(callContext, args) {
    callContext.schedule(args, "_argsGot");
};

Adder.prototype._argsGot = function(callContext, reason, result) {
    if (reason == Activity.states.complete) {
        var sum = 0;
        result.forEach(function (a) {
            if (_.isNumber(a)) sum += a;
        });
        callContext.complete(sum);
    }
    else {
        callContext.end(reason, result);
    }
}

module.exports = Adder;
