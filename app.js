'use strict'
var express = require('express');
   
var app = express();

app.get('/',function(req,res){

	res.sendFile(__dirname + '/index.html');
});

app.all("/api/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

app.listen(9000,function(){
	console.log('i am listning on port 9000');
})