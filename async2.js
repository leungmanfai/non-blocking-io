const fs = require('fs')

/*
fs.readFile('input.txt', (err, data) => {
   if (err) return console.error(err);
   console.log(data.toString());
});
*/

const x = (filename) => {
   fs.readFile(filename, y);
}

const y = (err, data) => {
   if (err) return console.error(err);
   console.log(data.toString());
}

x('input.txt');

console.log('Program Ended');