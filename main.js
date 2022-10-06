var GPIO = require('onoff').Gpio;
var left1;
var right1;
var left2;
var right2;
module.exports = {
  setGPIO: function(l1, r1, l2, r2) {
    left1 = new GPIO(l1, 'out');
    right1 = new GPIO(r1, 'out');
    left2 = new GPIO(l2, 'out');
    right2 = new GPIO(r2, 'out');
  },
  forward: function() {
    left1.writeSync(1);
    left2.writeSync(0);
    right1.writeSync(1);
    right2.writeSync(0);
  },
  backward: function() {
    left1.writeSync(0);
    left2.writeSync(1);
    right1.writeSync(0);
    right2.writeSync(1);
  },
  left: function() {
    left1.writeSync(0);
    left2.writeSync(1);
    right1.writeSync(1);
    right2.writeSync(0);
  },
  right: function() {
    left1.writeSync(1);
    left2.writeSync(0);
    right1.writeSync(0);
    right2.writeSync(1);
  },
  stop: function() {
    left1.writeSync(0);
    left2.writeSync(0);
    right1.writeSync(0);
    right2.writeSync(0);
  }
}
