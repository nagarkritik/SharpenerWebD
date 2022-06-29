const express = require('express')

const rootDir = require('../util/path')
const path = require('path')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// /admin/add-product => POST
router.post('/add-product',(req, res, next)=>{
    console.log(req.body)
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/shop')
})

module.exports = router