const Gpio = require('onoff').Gpio;
const fan = new Gpio(16, 'out');

let fanrunning = false;

module.exports = {
  start: () => {
    if (fanrunning) {
      return;
    }
    fanrunning = true;


    fan.writeSync(1);
    console.log("Started fan!");
  },

  stop: () => {
    if (!fanrunning) {
      return;
    }
    fanrunning = false;

    fan.writeSync(0);
    console.log("Stopped fan!");
  }
}

process.on('SIGINT', _ => {
  fan.unexport();
});