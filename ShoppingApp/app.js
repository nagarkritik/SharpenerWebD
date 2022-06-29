const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contacUs')
const successRotes = require('./routes/success')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/favicon.ico',(req, res, next)=>{
    console.log("I don't know why this fevicon request runs")
})


app.use('/admin',adminRoutes)
app.use('/shop', shopRoutes)
app.use('/contactUs', contactRoutes)
app.use('/success', successRotes)

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'))
})


app.listen(4000)