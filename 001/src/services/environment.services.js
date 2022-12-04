let { DB } = require('../../storage/environment')
function getEnvironment() {
    return DB
}
function getEnvironmentById(id) {
    console.log(DB);
    return DB.filter(el => el.id == id)
}

function createEnvironment(label, category, priority) {
    DB.push({ id: label.toLowerCase(), label, category, priority })
    return DB
}

function checkEnvironment(id, label, category, priority) {
    const res = DB.filter(el => el.id != id)
    if (res.length != DB.length) {
        res.push({ id, label, category, priority })
        DB = res
    }
    return DB
}

function deleteEnvironment(id){
    const res = DB.filter(el => el.id!== id)
    return res
}

function patchEnvironment(id, environmentCient){
const filtered = DB.filter(el=> el.id==id)
const merge = {...filtered[0],...environmentCient}
const withoutFiltered = DB.filter(el=>el.id!==id)
if(withoutFiltered.length===DB.length) throw new Error('wtf')
withoutFiltered.push(merge)
DB=withoutFiltered
return DB
}
module.exports = { getEnvironment, getEnvironmentById, createEnvironment, checkEnvironment, deleteEnvironment, patchEnvironment }
