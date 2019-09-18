const express = require('express');
const app = express();
const PORT=3333;

// respond with "hello world" when a GET request is made to the homepage

function listeningHandler(){
    console.log(`http://172.0.0.1:${PORT} 서버 시작!`)
}
app.get('/',homeHandler);
app.get('/profile',profileHandler);

app.listen(PORT,listeningHandler);

function homeHandler(req,res){
    console.log("H Start");
    res.send("H Start");
}
function profileHandler(req,res){
    console.log("P Start");
    res.send("P Start");
}