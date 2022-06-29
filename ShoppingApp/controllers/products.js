const rootDir = require('../util/path')
const path = require('path')

exports.getAddProduct =  (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

exports.postAddProduct = (req, res, next)=>{
    console.log(req.body)
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/shop')
}

exports.getProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}

