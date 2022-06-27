const http = require("http")


const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.headers)
    
    // // console.log("Kritik Nagar")
    // //process.exit()

    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title>My Fist Page </title></head>')
    // res.write('<body><h1>Hello from my node.js server</h1></body>')
    // res.write('</html>')
    // res.end()

    console.log(req.url)
    let url = req.url

    if(url == "/home"){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My Fist Page </title></head>')
        res.write('<body><h1>wlcome home</h1></body>')
        res.write('</html>')
        res.end()
    }else if(url == "/about"){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My Fist Page </title></head>')
        res.write('<body><h1>wlcome to about us page</h1></body>')
        res.write('</html>')
        res.end()
    }else if (url == "/node"){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My Fist Page </title></head>')
        res.write('<body><h1>wlcome to my node js project</h1></body>')
        res.write('</html>')
        res.end()
    }
})


server.listen(4000) 