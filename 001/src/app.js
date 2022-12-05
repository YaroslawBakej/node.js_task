const express = require('express')
const { Environment } = require('./services/environment.services')
const bodyParser = require("body-parser");
const app = express()



class App{
    constructor(){
        this.app=express()
        this.middleware=this.middleware()
        this.routes=this.routes()
    }
     middleware(){
        this.app.use(bodyParser.json())
     }

     routes(){
        this.app.get('/', (req, res) => {
            try {
                const environment = new Environment()
                res.status(200).send(environment.getEnvironment())  
            } catch (error) {
                res.status(500).send(`error`)
            }
            
        })
        
        this.app.get('/:id', (req, res) => {
            const { id } = req.params
            const environment = new Environment()
            res.send(environment.getEnvironmentById(id))
        })
        
        this.app.post('/', (req, res) => {
            const { label, category, priority } = req.body
            const environments = new Environment()
            res.send(environments.createEnvironment(label, category, priority))
        })
        
        this.app.put('/:id', (req, res) => {
            const { id } = req.params
            const { label, category, priority } = req.body
            const updateEnvironments = new Environment()
            res.send(updateEnvironments.checkEnvironment(id, label, category, priority))
        })
        this.app.delete('/:id', (req, res) => {
            const { id } = req.params
            const deleteEnvironments = new Environment(id)
            res.send(deleteEnvironments.deleteEnvironment)
        
        })
        
        this.app.patch('/:id',(req,res)=>{
            const {id} = req.params
            const patchEnvironments= patchEnvironment(id, req.body)
            res.send(patchEnvironments)
        })
    
     }
    
}


module.exports = App