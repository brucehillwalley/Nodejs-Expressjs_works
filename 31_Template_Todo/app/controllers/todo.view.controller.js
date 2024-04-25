"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// CONTROLLERS:

const Todo = require('../models/todo.model')
const PRIORITY = {
    '-1': 'Low',
    '0': 'Normal',
    '1': 'High'
}

module.exports = {

    list: async (req, res) => {

        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll({
            order: [['isDone', 'ASC'],['priority', 'DESC'], ['id', 'DESC'] ],
            // order: [['id', 'DESC']] // Id'ye göre ters sırala en son kaydedilen ilk gösterilir
        })
        
        // const data = await Todo.findAndCountAll({
        //     order: [['isDone', 'ASC']], // 'isDone' true olanlar önce, false olanlar sonra
        //   });
        // console.log(data.rows);

        // res.status(200).send({
        //     error: false,
        //     result: data
        // })

        //View Template:
        // db den gelen veriler ile todoList view i render edilir. Veriler view de kullanılacak.
        res.render('todoList', {todos:data.rows, total:data.count, priority:PRIORITY})
    },

    // CRUD:

    create: async (req, res) => {

        // const receivedData = req.body

        // const data = await Todo.create({
        //     title: receivedData.title,
        //     description: receivedData.description,
        //     priority: receivedData.priority,
        //     isDone: receivedData.isDone,
        //     // newKey: 'newValue' // Modelde tanımlanmadığı için bir işe yaramayacaktır.
        // })

        // const data = await Todo.create(req.body)

        // res.status(201).send({
        //     error: false,
        //     result: data.dataValues
        // })

        // formdaki veriler post ile gönderilmiş ise kaydet:
        if(req.method == 'POST'){
            const data = await Todo.create(req.body)

        //    data ? res.redirect('/view') : res.redirect('/views/create')
        res.redirect('/view')

        // else kayıt oluşturma sayfası yani boş form görüntüle
        }else {

            res.render('todoCreate', {priority:PRIORITY})
        }
    },

    read: async (req, res) => {

        // const data = await Todo.findOne({ where: { id: req.params.id } })
        const data = await Todo.findByPk(req.params.id)

        // res.status(200).send({
        //     error: false,
        //     result: data
        // })
        // console.log(data);
        res.render('todoRead', {todo:data.dataValues, priority:PRIORITY})

    },

    update: async (req, res) => {

        // const data = await Todo.update({ ...newData }, { ...where })
        const data = await Todo.update(req.body, { where: { id: req.params.id } })

        // res.status(202).send({
        //     error: false,
        //     message: 'Updated',
        //     body: req.body, // Gönderdiğim veriyi göster.
        //     result: data,
        //     new: await Todo.findByPk(req.params.id) // Güncellenmiş veriyi de göster.
        // })


        if (req.method == 'POST') {
            // UPDATE:
                const data = await Todo.update(req.body, { where: { id: req.params.id } })
                res.redirect('/view')
    
            } else {
            // VIEW:
            // var olan veriyi getir:
            const data = await Todo.findByPk(req.params.id)
            // Form View:
                res.render('todoUpdate', { todo:data.dataValues, priority: PRIORITY })
            }

    },

    delete: async (req, res) => {

        // const data = await Todo.destroy({ ...where })
        const data = await Todo.destroy({ where: { id: req.params.id } })
        // console.log(data)

        // //? 204 No Content -> Ekrana çıktı vermeyebilir.
        // res.status(204).send({
        //     error: false,
        //     message: 'Deleted',
        //     result: data
        // })

        if (data > 0) { // Silme gerçekleşti ise:
            // res.status(204).send()
            //? ana sayfaya yönlendir
            res.redirect('/view')
        } else { // Silme gerçekleşmedi ise:
            // res.status(404).send({
            //     error: true,
            //     result: data
            // })
            //? ErrorHandler'a havale edebilirim:
            res.errorStatusCode = 404
            throw new Error('Not Found.')
        }
    }
}