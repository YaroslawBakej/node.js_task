const express = require('express')
const { getUsers, getUsersById, updateUsers, createUser, deleteUsers } = require('../service/service.users')

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


route.post('/', async (req, res) => {
    try {
        const {
            name, surname, birth, city, age
        } = req.body
        const user = await createUser(name, surname, birth, city, age)
        res.status(200).send(user)
    } catch (error) {

    }
})

route.put('/:info_id', async (req, res) => {
    try {
        const { info_id } = req.params
        const {
            name, surname, birth, city, age
        } = req.body

        const users = await updateUsers(info_id, name, surname, birth, city, age)
        res.status(200).send(users)

    } catch (error) {

    }
})

route.delete('/:info_id', async (req, res) => {
    try {
        const { info_id } = req.params
        const users = await deleteUsers(info_id)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
module.exports = route;