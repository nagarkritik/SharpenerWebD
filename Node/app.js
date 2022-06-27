// const http = require("http")


// const server = http.createServer((req, res)=>{
//     // console.log(req.url, req.method, req.headers)
    
//     // // console.log("Kritik Nagar")
//     // //process.exit()

//     // res.setHeader('Content-Type', 'text/html')
//     // res.write('<html>')
//     // res.write('<head><title>My Fist Page </title></head>')
//     // res.write('<body><h1>Hello from my node.js server</h1></body>')
//     // res.write('</html>')
//     // res.end()

//     console.log(req.url)
//     let url = req.url

//     if(url == "/home"){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html>')
//         res.write('<head><title>My Fist Page </title></head>')
//         res.write('<body><h1>wlcome home</h1></body>')
//         res.write('</html>')
//         res.end()
//     }else if(url == "/about"){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html>')
//         res.write('<head><title>My Fist Page </title></head>')
//         res.write('<body><h1>wlcome to about us page</h1></body>')
//         res.write('</html>')
//         res.end()
//     }else if (url == "/node"){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html>')
//         res.write('<head><title>My Fist Page </title></head>')
//         res.write('<body><h1>wlcome to my node js project</h1></body>')
//         res.write('</html>')
//         res.end()
//     }
// })


// server.listen(4000) 

const fs = require("fs")
const http = require('http')
const { parse } = require("path")

const server = http.createServer((req, res)=>{
    let url = req.url
    let method = req.method

    if (url === "/"){
        return fs.readFile("message.txt", 'utf-8', (err, data)=>{
            console.log(data)
            res.setHeader('Content-Type', 'text/html')
            res.write('<html>')
            res.write('<head><title>Enter Message </title></head>')
            res.write(`<body><p>${data}</p><form action="/message" method="POST"><input type=text name="message"><button type="submit">Send</button></form></body>`)
            res.write('</html>')
            return res.end()
        })

    }

    if(url === "/message" && method === 'POST'){
        const body = []
        req.on('data',(chunk)=>{
            //console.log(chunk)
            body.push(chunk)
        })

        return req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")[1]
            //console.log(message)

            // sync will block the code sync means it will write in the file synchronously
            // and it will block the program until complete file is written
            // So instead of this we use only writeFile and pass a third parameter 
            // which is a callback function
            //fs.writeFileSync('message.txt', message)

            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302
                res.setHeader('Location', '/')
                res.setHeader('Content-Type', 'text/html')
                return res.end()
            }) 
        })


    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My Fist Page </title></head>')
    res.write('<body><h1>Welcome home</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)