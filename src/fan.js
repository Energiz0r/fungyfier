
let fanrunning = false;

module.exports = {
  start: () => {
    if (fanrunning) {
      return;
    }
    fanrunning = true;
    console.log("Started fan!");
  },

  stop: () => {
    if (!fanrunning) {
      return;
    }
    fanrunning = false;
    console.log("Stopped fan!");
  }
}