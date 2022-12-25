const express = require('express')
const { getUsers, getUsersById } = require('../service/service.users')

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const users = await getUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const users = await getUsersById(id)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route;