const express = require('express')
const {getEnvironment}=require('../services/environment.services')
const route=express.Router() 

route.get('/', (req,res)=>{
    const environment=getEnvironment()
    res.send(environment)
})


module.exports=route