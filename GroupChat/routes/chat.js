const express = require('express')
const { route } = require('./login')

const fs = require('fs')

const router = express.Router()

router.get('/', (req, res, next)=>{
    fs.readFile('groupChat.txt', 'utf-8', (err, data)=>{
        console.log(data)
    })
    res.send(`<form onsubmit="document.getElementById('username').value = localStorage.getItem('username')"
    action='/chat' method='POST'>
    <input id='message' type='text' name='message'>
    <input id="username" type='hidden' name='username'>
    <button type='submit'>Send</button></form>`)
})

router.post('/', (req, res, next)=>{

    let text = `${req.body.username}: ${req.body.message}`
  
    fs.writeFile('groupChat.txt', text, (err)=>{
        console.log("Written in file")
    })
})

module.exports = router