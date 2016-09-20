var fs = require("fs");

fs.readFile('input.txt', printData);

function printData(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}

console.log("Program Ended");
