const express = require('express');
const app = express();
const PORT=333;

// respond with "hello world" when a GET request is made to the homepage

function listeningHandler(){
    console.log(`http://172.0.0.1:${PORT} 서버 시작!`)
}
app.listen(PORT,listeningHandler);
