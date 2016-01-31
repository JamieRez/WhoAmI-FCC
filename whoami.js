var express = require('express');
var app = express();

app.enable('trust proxy');

app.get('/' , function(req,res){
    var info = ["IP address: " + req.ip , "Language: " + req.headers["accept-language"].substr(0,5) , "User Agent: " + req.headers['user-agent']];
    res.send(info);
});

app.listen(8080 , function(req,res){
    console.log("Listening to port 8080");
});