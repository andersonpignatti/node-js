const http= require('http');
const { text } = require('stream/consumers');

http.createServer((request,response) =>{

response.writeHead(200, {'Content-Type': 'text/plain'})
response.end("Hello World!");


}).listen(3000, (err)=>{
    if (err){
    console.log(err)}
    else{
        console.log("servidor rodando na porta 3000")
    }
})