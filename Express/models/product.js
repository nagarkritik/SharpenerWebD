const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')
const p = path.join(rootDir,'data', 'products.json')

const getProductsFromFile = (cb)=>{

    fs.readFile(p, (err, fileContent)=>{
        if(err){
            cb([])
        }else{ cb(JSON.parse(fileContent))}
    } )
}

module.exports = class Product{
    constructor(title){
        this.title = title
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err)
            })
        })

        // readind the data to of file to get the array of products already stored in data file
        
    }

    static fetchAll(cb){
        getProductsFromFile(cb)
    }

}