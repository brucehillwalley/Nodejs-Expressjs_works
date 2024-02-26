// What is a Module in Node.js?
// Consider modules to be the same as JavaScript libraries.

// A set of functions you want to include in your application.

//? Look at our Built-in Modules Reference for a complete list of modules.
//! https://www.w3schools.com/nodejs/ref_modules.asp

//* To include a module, use the require() function with the name of the module:
let http = require("http");

//? You can create your own modules, and easily include them in your applications.
//? The following example creates a module that returns a date and time object:
exports.myDateTime = function () {
    return Date();
}

//? Use the exports keyword to make properties and methods available outside the module file.
//? Save the code above in a file called "myfirstmodule.js"

//? Now you can include and use the module in any of your Node.js files.
var dt = require("./myfirstmodule");
console.log(dt.myDateTime());
console.log(Date());

/// NODEJS AS A WEB SERVER ///

//? The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
//? Use the createServer() method to create an HTTP server:

//create a server object:
http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
