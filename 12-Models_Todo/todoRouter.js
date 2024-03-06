"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// ROUTES:

const router=express.Router()

router.get('/', async(req,res)=>{
    const data = await Todo.findAndCountAll()
    res.status(200).send({
        error:false,
        result:data
    })
})





router.post('/', async(req,res)=>{

    const receivedData = req.body
    
    const data = await Todo.create({
        title:receivedData.title,
        description:receivedData.description,
        priority:receivedData.priority,
        isDone:receivedData.isDone,
    
    })
 console.log(data);


    res.status(201).send({
        error:false,
        result:data.dataValues
    })
})

// read todo:
router.get('/:id', async(req,res)=>{
    // const data = await Todo.findOne({
    //     where:{
    //         id:req.params.id
    //     }        
    // })

    const data = await Todo.findByPk(req.params.id)

    res.status(200).send({
        error:false,
        result:data
    })
})

router.put('/:id', async(req,res)=>{
    const data = await Todo.update(req.body,{
        where:{
            id:req.params.id
        }
    })
    res.status(202).send({
        error:false,
        message:'updated',
        body:req.body,
        results:data,
        new: await Todo.findByPk(req.params.id) // güncellenmiş datayı gösterir
    })
})

router.delete('/:id', async(req,res)=>{
    const data = await Todo.destroy({
        where:{
            id:req.params.id
        }
    })
    // console.log(data);
//? 204 No Content ==> ekrana çıktı vermeye bilir
    // res.status(204).send({
    //     error:false,
    //     message:'deleted',
    //     result:data
    // })
   if(data>0){
    res.sendStatus(204)
   }else{
    // res.status(404).send({
    //     error:true,
    //     result:data
    // })

    res.errorStatusCode = 404
    throw new Error('Not Found')
   }
})


app.use(router)

module.exports=router