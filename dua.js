const fs = require("fs");

// membaca file dari txt
const fileInput = "log/homework-log.txt";
// menyimpang di path ini
const fileOutput = "log/log.txt";

fs.readFile(fileInput, "utf8", (err, data) => {
  if (err) throw err;

  fs.writeFile(fileOutput, data, (err) => {
    if (err) throw err;
    // data dari file input akan tercopy ke file out
    console.log("Log telah ditulis ke log/log.txt");
  });
});

// sebenarnya read file tidak ada di homework, tapi saya ttp bikin biar ingt dan bisa
