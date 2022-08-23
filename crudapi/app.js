const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Books';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on('open', function(){
    console.log("Connected");
});