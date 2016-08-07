"use strict";

var express = require('express');
var mongo = require('mongodb');
var client = mongo.MongoClient;

var app = express();
var url = "mongodb://localhost:27017/tutorial";

var users = [
    {
        name: "Jone",
        age: 16
    },
    {
        name: "Mike",
        age: 18
    }
];

var addUser = function(db, user, callback){
    var users = db.collection('users');
    users.insert(user, function(err, result){
        if(!err){
            callback("User added");
        }else{
            callback("User exists");
        }
    });
}

var findDocuments = function(db, collection, callback){
    var collection = db.collection(collection);
    collection.find({}).toArray(function(err, docs){
        callback(docs);
    });
}

var cntDocuments = function(db,  callback){
    var collection = db.collection();
    collection.find({}).count(function(e, count) {
        callback({count: count});
    });
}

app.get('/users/all', function(req, res){
    client.connect(url, function(err, db){
        if(!err){
            findDocuments(db, 'users', function(result){
                res.send(result);
            });
        }else{
            res.send(err);
        }
    });
});

app.listen(8080, function(){
    console.log("Listening on port 8080");
});

