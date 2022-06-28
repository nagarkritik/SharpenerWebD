const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/favicon.ico',(req, res, next)=>{
    console.log("I don't know why this fevicon request runs")
})
app.use('/add-product', (req, res, next)=>{
    res.send(`<form action="/product" method="POST">
    <input type="text" name="title">
    <input type="text" name="size">
    <button type="submit">Add Product</button></form>`)
})

app.post('/product',(req, res, next)=>{
    console.log(req.body)
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    res.send("<h1>Hello from express</h1>") // allows us to send response of any type
})


app.listen(4000)