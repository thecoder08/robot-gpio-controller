var GPIO = require('onoff').GPIO;
var backwardleft;
var backwardright;
var forwardleft;
var forwardright;
module.exports = {
  setGPIO: function(bl, br, fl, fr) {
    backwardleft = new GPIO(bl, 'out');
    backwardright = new GPIO(br, 'out');
    forwardleft = new GPIO(fl, 'out');
    forwardright = new GPIO(fr, 'out');
  },
  forward: function() {
    backwardleft.writeSync(0);
    backwardright.writeSync(0);
    forwardleft.writeSync(1);
    forwardright.writeSync(1);
  },
  backward: function() {
    backwardleft.writeSync(1);
    backwardright.writeSync(1);
    forwardleft.writeSync(0);
    forwardright.writeSync(0);
  },
  left: function() {
    backwardleft.writeSync(1);
    backwardright.writeSync(0);
    forwardleft.writeSync(0);
    forwardright.writeSync(1);
  },
  right: function() {
    backwardleft.writeSync(0);
    backwardright.writeSync(1);
    forwardleft.writeSync(1);
    forwardright.writeSync(0);
  },
  stop: function() {
    backwardleft.writeSync(0);
    backwardright.writeSync(0);
    forwardleft.writeSync(0);
    forwardright.writeSync(0);
  }
}
