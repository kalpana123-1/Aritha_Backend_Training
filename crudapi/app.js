const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Books';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on('open', ()=> {
    console.log("Connected");
});

const bookRouter = require('./routes/books');
app.use('/books', bookRouter);

app.listen(3300, ()=> {
    console.log("Server started on 3300 port");
})