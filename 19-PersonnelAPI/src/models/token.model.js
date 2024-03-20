"use strict";
/*-------------------------------------------------------
    EXPRESS - Personnel API
-------------------------------------------------------*/

const { mongoose } = require("../configs/dbConnection");
// bu şekilde çağırmanın sebebi modülü tekrar tekrar çağırmamak. Bu yöntem  sağlıklı olan 
/*-------------------------------------------------------*
{
    "userId": "65343222b67e9681f937f001",
    "token": "...tokenKey..."
}
/*-------------------------------------------------------*/
// Token Model:

const TokenSchema = new mongoose.Schema(
    {
        userId: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Personnel',
            required: true,
            unique: true,
            index: true,
            // index true olduğunda daha hızlı erişim saglayacaktır.veri tabanı ilk oluşturılduğunda yapılmalıdır.

        },

        token: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            index: true,
            // sürekli token sorgulayacağımız için index true verilir.


        }

    },
    {
        collection: "tokens",
        timestamps: true
    })

    module.exports = mongoose.model('Token', TokenSchema)