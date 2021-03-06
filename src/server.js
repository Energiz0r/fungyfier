const display = require("./LCD-display.js");
const dhtSensor = require("./dht-sensor.js");
const fan = require("./fan.js");
const humidifier = require("./humidifier.js");

var runService = async function() {
  let dhtResult = await dhtSensor.readAsync();
  let tempString = `T:${dhtResult.temperature}C H:${dhtResult.humidity}%`;
  display.write(new Date().toISOString().substring(11, 19), tempString);

  if (dhtResult.humidity < 33) {
    fan.start();
    humidifier.start();
  } else if (dhtResult.humidity > 40) {
    fan.stop();
    humidifier.stop();
  }
};

setInterval(runService, 1000);

console.log("Starting service...");
process.on("SIGINT", _ => {
  console.log("Stopped service")
});