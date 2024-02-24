"use strict";
/*
NODE MODULES
*/
console.log("this line is in modules.js");

//? single func
// export const testFunction = function(){
//     console.log("this is a test function");
// }

// module.exports=testFunction()

//? multi func
const testFunctionA = function () {
  console.log("this is a test functionA");
};
const testFunctionB = function () {
  console.log("this is a test functionB");
};
const testFunctionC = function () {
  console.log("this is a test functionC");
};

module.exports = [  testFunctionA,
  testFunctionB,
  testFunctionC,]


