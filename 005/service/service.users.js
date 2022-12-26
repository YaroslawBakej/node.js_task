const { getUsersDB, getUsersByIdDB, updateUserDB, createUserDB, deleteUsersDB } = require('../repository/repository.users')


async function getUsers() {
    const users = await getUsersDB()
    if (!users.length) throw new Error('DB is empty')
    return users
}

async function getUsersById(id) {
    const users = await getUsersByIdDB(id)
    if (!users.length) throw new Error('DB is empty')
    return users
}

async function createUser(name, surname, birth, city, age){
    const users =await createUserDB(name, surname, birth, city, age)
    if (!users.length) throw new Error('DB is empty')
    return users
}

async function updateUsers(){
    const users = await updateUserDB()
    if (!users.length) throw new Error('DB is empty')
    return users

}

async function deleteUsers(info_id){
    const users=await deleteUsersDB(info_id)
    if (!users.length) throw new Error('DB is empty')
    return users
}
module.exports = { getUsers, getUsersById, createUser,updateUsers,deleteUsers }