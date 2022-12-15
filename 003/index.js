const app = require('./src/app')

const port = 8000

app.listen(port, () => console.log(`ready steady go on port ${port}`))

// ставим в первую очередь index.js
// далее создаем файл app.js, controller.js, sevices.js, storage.json
// в app.js создаем переменную const express=require('express')
// const app=express()
// импортируем парсер const bodyParser = require('body-Parser'), app.use(bodyParser.json())
// потом импортируем контроллер const cotroller=require('адрес контроллера')
//app.use('/', controller)
// обработка ошибок
// app.use((error, req, res, next) => {
//     res.status(500).send(error.message);
// });
// далее переходим в сервисы
// const fs=require('fs')
// const {readFileSync, writeFileSync}=require('fs')
// импортируем хранилище const storage='путь к джсон файлу'
// создаем функции для запроса, обновления, удаления джсон файла
// далее экспортируем наши функции module.exports={getUser....}
//переходим в контроллер
// в контроллере импортируем экспресс
// const express=require('express')
//импортируем функции из сервисов 
//const{getUser...}=require('путь к сервисам')
// вызываем метод роутер
// const router=express.Router()
//создаем запросы 
// router.get('/', (req,res)=>{
//     const user=getUser()
//     res.status(200).send(user) 
// })
// экспортируем роутер 
// module.exports=router
//