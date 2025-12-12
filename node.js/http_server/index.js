const http = require("http");
const fs = require("fs")
const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()} New request recived\n `

    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("hello from server")

    })

    
});

myserver.listen(1000,()=>{
    console.log("server started ")
});