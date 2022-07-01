const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser');

const sequelize = require('./util/database')
const User = require('./models/user')

const app = express()


app.use(cors())
app.use(bodyParser.json());


app.get('/getUsers', (req, res, next)=>{
    User.findAll().then(result=>{
        console.log(result)
    })
})

app.post('/addNewUser', (req, res, next) => {
    console.log(req.body)
    const name = req.body.name.toString()
    const email = req.body.email.toString()
    const phone = req.body.phone.toString()
    const date = req.body.date.toString()
    const time = req.body.time.toString()

    User.create({
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time
    }).then((result)=> console.log("Stored in database"))
    .catch(err=> console.log(err))
})

// app.listen(4000)

sequelize.sync()
.then((result)=>{
    // console.log(result)
    app.listen(4000)
})
.catch(err=> console.log(err))
