const { pool } = require("../src/DB")

async function getUsersDB() {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users JOIN users_info ON users.info_id =users_info.id '
    const data = (await client.query(sql)).rows
    return data
}
async function getUsersByIdDB(id) {
    const client = await pool.connect()
    const sql = 'SELECT name FROM users JOIN users_info ON users.info_id =users_info.id WHERE users.id = $1'
    const data = (await client.query(sql, [id])).rows
    return data
}

module.exports = { getUsersDB, getUsersByIdDB }