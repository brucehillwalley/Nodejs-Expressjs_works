"use strict";

//| EXPRESSJS - MIDDLEWARES

// const middleFunc1 = (req, res, next) => {

//     req.message1 = 'middleFunc1 started.'
//     next()
//     // next("route")
//     // //* 1 route atlıyor
  
// }

// const middleFunc2 = (req, res, next) => {
    
//     req.message2 = 'middleFunc2 started.'
//     next()
// }


// // module.exports=[ middleFunc1, middleFunc2 ]
// module.exports= {middleFunc1, middleFunc2 }
/* ------------------------------------------------------- */
// module.exports.middleFunc1 = (req, res, next) => {

//     req.message1 = 'middleFunc1 started.'
//     next()
//     // next("route")
//     // //* 1 route atlıyor
  
// }

// module.exports.middleFunc2 = (req, res, next) => {
    
//     req.message2 = 'middleFunc2 started.'
//     next()
// }




/* ------------------------------------------------------- */
//| obje olarak export ediyoruz
module.exports={
    middleFunc1:(req, res, next) => {
            console.log('middleFunc1 started.');
           req.message1 = 'middleFunc1 started.'
             next()
          
          
        },
    middleFunc2:
    (req, res, next) => {
        console.log('middleFunc2 started.');
    
            req.message2 = 'middleFunc2 started.'
            next()
        }
}








/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */