const fs=require('fs')

const {readFileSync, writeFileSync} =require('fs')

const storage='storage/file.json'

function getUser(){
    return JSON.parse(readFileSync(storage))
}

module.exports={getUser}

