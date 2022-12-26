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

async function createUserDB(name, surname, birth, city, age) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'insert into users_info(birth, city, age) values ($1, $2, $3) returning *'

        const data = (await client.query(sql, [birth, city, age])).rows[0]

        const sql2 = 'insert into users(name, surname, info_id) values ($1, $2, $3) returning *'

        await client.query(sql2, [name, surname, data.id])

        const sql3 = 'Select * from users join users_info on users_info.id=users.info_id'

        const data3 = (await client.query(sql3)).rows

        await client.query('COMMIT')

        return data3
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`createUserDB ${error.message}`);
        return []

    }
}

async function updateUserDB(info_id, name, surname, birth, city, age) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = ' Update users_info set birth=$1, city=$2, age=$3 where id=$4'

        await client.query(sql, [birth, city, age, info_id])

        const sql2 = 'update users set name=$1, surname=$2 where id=$3'
        await client.query(sql, [name, surname, id])

        const sql3 = 'select * from users join users_info on users.info_id=users_info.id where id=$1 '

        const data = await client.query(sql3, [info_id]).rows

        await client.query('COMMIT')

        return data
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`updateUserDB ${error.message}`);
        return []
    }
}

async function deleteUsersDB(info_id) {
    
    const client = await pool.connect()

    try {
        await client.query('BEGIN')

        const sql = 'delete from users where id=$1'
        await client.query(sql, [info_id])

        const sql2 = 'delete from users_info where id=$1 returning *'
        const data = (await client.query(sql2, [info_id])).rows

        await client.query('COMMIT')
        return data

    } catch (error) {

        await client.query('ROLLBACK')
        console.log(`deleteUsersDB ${error.message}`);
        return []
    }
}

module.exports = { getUsersDB, getUsersByIdDB, createUserDB, updateUserDB, deleteUsersDB }