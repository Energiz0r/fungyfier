const fetch = require("node-fetch");

module.exports = {
  postData: (payload = {}) => {
    let sensorData = { user: "Tommy", sensorName: "Fungifier" };
    sensorData.payload = JSON.stringify(payload);
    sensorData.timeStamp = new Date();

    return fetch("https://iotrestapi.azurewebsites.net/api/Measurements", {
        method: "post",
        body: JSON.stringify(sensorData),
        headers: { "Content-Type": "application/json" }
      })
      .then(res => res.json())
      .then(json => console.log(json));
  }
}