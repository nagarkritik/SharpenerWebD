const express = require('express')

const router = express.Router()

router.get('/', (req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('user').value)"
    action='/login' method='POST'><input id='user' type='text' name='username'><button type='submit'>Login</button></form>`)
})

router.post('/',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/chat')
})

module.exports = router