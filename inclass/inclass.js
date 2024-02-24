'use strict'
console.log("Hello World");
// require("./modules/modules.js")
// js uzantıya gerek yok
require("./modules/modules.js")
// defult index.js arar
require("./modules/")

// //? sigle function call
// const testFunction =require("./modules/modules.js")
// testFunction();

//? multi function call
const[test1,test2,test3]=require("./modules/modules.js")
test1()
test2()
test3()