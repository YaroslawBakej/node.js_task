const { pool } = require('../DB')

async function getEnviromentDB() {
    const client = await pool.connect()

    const sql = 'SELECT * FROM enviroment'
    const data = (await client.query(sql)).rows
    return data
}

async function deleteEnviromentDB(id) {
    const client = await pool.connect()
    const sql = 'DELETE FROM enviroment WHERE id=$1 RETURNING *'
    const data = (await client.query(sql, [id])).rows
    return data
}

async function createEnviromentDB(label, category, priority) {
    const client = await pool.connect()
    const sql = 'INSERT INTO enviroment(label, category, priority) VALUES ($1,$2,$3) RETURNING *'
    const data = (await client.query(sql, [label, category, priority])).rows
    return data
}

async function patchEnviromentDB(id, dataFromClient) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM enviroment WHERE id=$1'
    const data = (await client.query(sql, [id])).rows[0]
    const mergeData = { ...data, ...dataFromClient }
    console.log(mergeData);
    const sql2 = 'UPDATE enviroment SET label = $1, category = $2,priority=$3 WHERE id=$4 RETURNING *'
    const data2 = (await client.query(sql2, [mergeData.label, mergeData.category, mergeData.priority, id])).rows
    return data2

}

module.exports = { getEnviromentDB, deleteEnviromentDB, createEnviromentDB, patchEnviromentDB }
