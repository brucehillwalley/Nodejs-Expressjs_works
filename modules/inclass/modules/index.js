'use strict'
/*
NODE MODULES
*/
console.log("this line is in index.js");

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

console.log(fs.readFileSync('mynewfile1.txt', 'utf8'));

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
})

fs.writeFile('mynewfile2.txt',"2.Hello content!", function (err) {
    if (err) throw err;
    console.log('Saved!');
})