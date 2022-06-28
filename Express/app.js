const express = require('express')

// const http = require('http')

const app = express()

// Middleware 1
app.use((req,res,next)=>{
    console.log("In the middleware")
    next() // Allows the req to move to next middleware in line
})

// Middleware2
app.use((req,res,next)=>{
    console.log("In another middleware")
    res.send("<h1>Hello from express</h1>") // allows us to send response of any type
})

// const server = http.createServer(app)
// server.listen(3000)

app.listen(4000)