'use strict'

const PORT = 8081;

//Modules
var express = require('express');
var path = require('path');

//Initializations
var app = express();

//Middleware
app.use(express.static('public'));

//Routes
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Listening
app.listen(PORT, () => {console.log('Server start on port: %s...', PORT)});

