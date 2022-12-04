const express = require('express')
const { getEnvironment, getEnvironmentById, createEnvironment, checkEnvironment, deleteEnvironment, patchEnvironment } = require('./services/environment.services')
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    try {
        const environment = getEnvironment()
        res.status(200).send(environment)  
    } catch (error) {
        res.status(500).send(`error`)
    }
    
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const environment = getEnvironmentById(id)
    res.send(environment)
})

app.post('/', (req, res) => {
    const { label, category, priority } = req.body
    const environments = createEnvironment(label, category, priority)
    res.send(createEnvironment)
})

app.put('/:id', (req, res) => {
    const { id } = req.params
    const { label, category, priority } = req.body
    const updateEnvironments = checkEnvironment(id, label, category, priority)
    res.send(updateEnvironments)
})
app.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleteEnvironments = deleteEnvironment(id)
    res.send(deleteEnvironments)

})

app.patch('/:id',(req,res)=>{
    const {id} = req.params
    const patchEnvironments= patchEnvironment(id, req.body)
    res.send(patchEnvironments)
})
module.exports = app