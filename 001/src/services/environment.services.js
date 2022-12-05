const { } = require('fs')
const { readFileSync, writeFileSync } = require('fs')

class Environment {
    path = "storage/environment.json"

    readFile() {
        return JSON.parse(readFileSync(this.path))
    }
    
    writeFile(DB){
        writeFileSync(this.path, JSON.stringify(DB), 'utf8')
    }

    getEnvironment() {
        const DB = this.readFile()
        if (!DB.length) throw new Error('wrong database')
        return DB
    }
    getEnvironmentById(id) {
        const DB = this.readFile
        if (!DB.length) throw new Error('wrong database')
        return DB.filter(el => el.id == id)
    }

    createEnvironment(label, category, priority) {
        const DB = this.readFile
        DB.push({ id: label.toLowerCase(), label, category, priority })
        this.writeFile(DB)
        console.log(DB)
        return DB
    }

    checkEnvironment(id, label, category, priority) {
        const DB = this.readFile
        const res = DB.filter(el => el.id != id)
        if (res.length != DB.length) {
            res.push({ id, label, category, priority })
            DB = res
        }
        this.writeFile(res)
        return res
    }

    deleteEnvironment(id) {
        const DB = this.readFile
        const res = DB.filter(el => el.id !== id)
        this.writeFile(res)
        return res
    }

    patchEnvironment(id, environmentCient) {
        const DB = this.readFile
        const filtered = DB.filter(el => el.id == id)
        const merge = { ...filtered[0], ...environmentCient }
        const withoutFiltered = DB.filter(el => el.id !== id)
        if (withoutFiltered.length === DB.length) throw new Error('wtf')
        withoutFiltered.push(merge)
        DB = withoutFiltered
        this.writeFile(withoutFiltered)
        return withoutFiltered
    }
}

module.exports = { Environment }
