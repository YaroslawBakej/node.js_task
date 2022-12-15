const express=require('express')

const {getUser}=require('../services/services')

const router=express.Router()

router.get('/',(req,res)=>{
    const user=getUser()
    res.status(200).send(user)
})

module.exports = router