var sensor = require("node-dht-sensor");

var displayData = function(){
  sensor.read(11, 4, function(err, temperature, humidity) {
    if (!err) {
      console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
    }
  });
}

setInterval(displayData, 1000);
