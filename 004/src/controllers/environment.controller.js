const express = require('express');
const { getEnviroment, deleteEnviroment, createEnviroment, patchEnviroment } = require('../services/enviroment.services')

const route = express.Router();


route.get('/', async (req, res) => {
    const enviroment = await getEnviroment()
    res.status(200).send(enviroment)
})

route.post('/', async (req, res) => {
    const { label, category, priority } = req.body
    const enviroment = await createEnviroment(label, category, priority)
    res.status(200).send(enviroment)

})

route.delete('/:id', async (req, res) => {
    const { id } = req.params
    const enviroment = await deleteEnviroment(id)
    res.status(200).send(enviroment)
})

route.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const enviroment = await patchEnviroment(id, req.body)
    res.status(200).send(enviroment)
})

module.exports = route