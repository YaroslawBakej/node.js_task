const {getEnvironmentDB}=require('../repository/environment.repository.js')

function getEnvironment(){
    const environment=getEnvironmentDB()
    if(!environment)throw new Error('ашипка')
    return environment
}

// остальные функции?

module.exports={getEnvironment}