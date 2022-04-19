const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const menuRouter = require('./routers/admin')
const path = require('path')
const hbs = require('hbs')
const { MongoClient } = require('mongodb')


const app=express()

const publicDirectory = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')
const viewsPath = path.join(__dirname, '../templates/views')

console.log(viewsPath)

MongoClient.connect(process.env.MONGODB_URL, (err, cleint)=>{
    if(err){
        throw err;
    }

    const db = client.db('user-profiles');
    const users = db.collection('users');
    app.locals.users = users;
})


app.use(express.static(publicDirectory))
app.use(express.urlencoded({extended: false}))

// hbs.registerPartial(partialsPath)

app.use(express.json())

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(userRouter)
app.use(taskRouter)
app.use(menuRouter)


module.exports = app



