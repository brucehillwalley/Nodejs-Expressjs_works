"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// ROUTERS:
const Todo = require('./todo.model')

const router = require('express').Router();

// LIST TODOS:
router.get("/", async (req, res) => {
  // const data = await Todo.findAll()
  const data = await Todo.findAndCountAll();

  res.status(200).send({
    error: false,
    result: data,
  });
});

//? CRUD Processes:

// CREATE TODO:
router.post("/", async (req, res) => {
  // const receivedData = req.body

  // const data = await Todo.create({
  //     title: receivedData.title,
  //     description: receivedData.description,
  //     priority: receivedData.priority,
  //     isDone: receivedData.isDone,
  //     // newKey: 'newValue' // Modelde tanımlanmadığı için bir işe yaramayacaktır.
  // })

  const data = await Todo.create(req.body);

  res.status(201).send({
    error: false,
    result: data.dataValues, //? verinin db ye kaydedilmiş hali olan veriyi verir.
  });
});

// READ TODO:
router.get("/:id", async (req, res) => {
  // const data = await Todo.findOne({ where: { id: req.params.id } })
  const data = await Todo.findByPk(req.params.id);

  res.status(200).send({
    error: false,
    result: data,
  });
});

// UPDATE TODO:
router.put("/:id", async (req, res) => {
  // const data = await Todo.uptade({...newData}, {...where})

  const data = await Todo.update(req.body, { where: { id: req.params.id } });
  res.status(202).send({
    error: false,
    message: "Updated",
    body: req.body,
    result: data,
    new: await Todo.findByPk(req.params.id), // güncellenmiş veriyi gösterir.
  });
});

// DELETE TODO:
router.delete("/:id", async (req, res) => {
  const data = await Todo.destroy({ where: { id: req.params.id } });

  console.log(data);

  //? 204 No Content ekrana çıktı vermeyebilir
//   res.status(204).send({
//     error: false,
//     message: "Deleted",
//     result: data,
//   });

if (data > 0) { // Silme gerçekleşti ise
    // res.status(204).send();
    res.sendStatus(204)
    //? Sadece status çıktı ver
  } else { // Silme gerçekleşmedi ise
    // res.status(404).send({
    //   error: true,
    //   message: "Not Found",
    //   result: data,
    // });

    //? ErrrorHandler a havale ediyoruz
    res.errorStatusCode = 404
    throw new Error("Not Found");
  }
  
});

// app.use(router);

module.exports = router