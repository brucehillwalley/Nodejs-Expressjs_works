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
// const testFunctionA = function () {
//   console.log("this is a test functionA");
// };
// const testFunctionB = function () {
//   console.log("this is a test functionB");
// };
// const testFunctionC = function () {
//   console.log("this is a test functionC");
// };

// module.exports = [  testFunctionA,
//   testFunctionB,
//   testFunctionC,]

// module.exports = { testFunctionA, testFunctionB, testFunctionC,
// pi: 3.14 };

// module.exports.testFunctionA = function () {
//     console.log("this is a test functionA");
//   };
//   module.exports.testFunctionB = function () {
//     console.log("this is a test functionB");
//   };
//   module.exports.testFunctionC = function () {
//     console.log("this is a test functionC");
//   };
//   module.exports.pi = 3.14;

  
module.exports ={
    testFunctionA: function () {
      console.log("this is a test functionA");
    },
    testFunctionB: function () {
      console.log("this is a test functionB");
    },
    testFunctionC: function () {
      console.log("this is a test functionC");
    },
    pi: 3.14,
}