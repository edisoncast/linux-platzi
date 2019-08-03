'use strict'

const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer(requestHandler)

function requestHandler ( req , res) {
   res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
   res.write(`El servidor de platzi está corriendo con pid ${process.pid} y en el puerto ${port}` , "utf-8");
   res.end()
}

server.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`) ) 