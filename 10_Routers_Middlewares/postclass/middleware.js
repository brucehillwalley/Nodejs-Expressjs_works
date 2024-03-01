"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

app.get('/', (gelen, giden, sonraki) => {
    
    console.log('Middeware started.')
    sonraki()

    //! next çalıştığı için sonraki middlewaree gececek aşağıdakiler çalıstırılmadı
    // res.send({
    //     message: 'Middleware'
    // })

})
app.get('/', (req, res) => {
    console.log('Route started.')


    res.send({
        message: 'welcome'
    })
})

/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));