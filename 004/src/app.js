const express = require('express')
const app=express()
const bodyParser=require('body-parser')
const route=require('./controllers/environment.controller')

app.use(bodyParser.json())
app.use('/', route)
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

module.exports=app