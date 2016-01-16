var express = require('express');
console.log("yes");
var app= express();

app.get('/',function(req,res){
    res.send('hello world');
});
app.listen(3000);