const Gpio = require('onoff').Gpio;
const humidifierRele = new Gpio(5, 'out');

module.exports = {
  start: () => {
    humidifierRele.writeSync(1);
    console.log("Started humidifier!");
  },

  stop: () => {
    humidifierRele.writeSync(0);
    console.log("Stopped humidifier!");
  }
}

process.on('SIGINT', _ => {
  humidifierRele.unexport();
});