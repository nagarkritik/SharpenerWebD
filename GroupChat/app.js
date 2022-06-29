const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const loginRoutes = require('./routes/login')
const chatRoutes  = require('./routes/chat')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/fevicon.ico', (req,res, next)=>{
    console.log(".........")
})

app.use('/login',loginRoutes)
app.use('/chat', chatRoutes)

app.use((req, res, next)=>{
    res.status(404).send(`<h1>Page not found</h1>`)
})

app.listen(3000)