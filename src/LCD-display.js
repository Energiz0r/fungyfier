const Lcd = require("lcd");
const lcd = new Lcd({
  rs: 21,
  e: 20,
  data: [26, 19, 13, 6],
  cols: 16,
  rows: 2
});
let isReady = false;

lcd.on("ready", _ => {
  isReady = true;
});

module.exports = {
  write: function(text1, text2) {
    if (!isReady) {
      return;
    }

    lcd.clear(() => {
      lcd.setCursor(0, 0);
      lcd.print(text1, err => {
        if (err) {
          throw err;
        }

        lcd.setCursor(0, 1);
        lcd.print(text2, err => {
          if (err) {
            throw err;
          }
        });
      });
    });
  }
};

// If ctrl+c is hit, free resources and exit.
process.on("SIGINT", _ => {
  lcd.clear(() => {
    lcd.close();
    process.exit();
  });
});
