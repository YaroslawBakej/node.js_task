const { getUsersDB, getUsersByIdDB } = require('../repository/repository.users')


async function getUsers() {
    const users = await getUsersDB()
    if (!users.length) throw new Error('DB is empty')
    return users
}

async function getUsersById(id) {
    const users = await getUsersByIdDB(id)
    return users
}

module.exports = { getUsers, getUsersById }