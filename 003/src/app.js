const express =require('express')

const bodyParser=require('body-Parser')
const user=require('../src/controllers/controllers')
const app=express()

app.use(bodyParser.json())
app.use('/', user)
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

module.exports= app