const sensor = require("node-dht-sensor").promises;

module.exports = {
  readAsync: async function() {
    try {
      return await sensor.read(11, 4);
    } catch (err) {
      console.log("ERROR IN DHT-SENSOR", err.message);
      return err;
    }
  }
};
