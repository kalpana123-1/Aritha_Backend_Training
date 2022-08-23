const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async(req, res)=>{
    // console.log('Get request');
    // res.send('Get Request');

    try{
        const books = await Book.find();
        res.json;
    }catch(err){
        res.send('Error '+err);
    }
})

router.post('/', async(req, res){
    const book = new Book({
        book_name : req.body.book_name,
        author_name: req.body.author_name,
        year_of_publish: req.body.year_of_publish,
        no_of_publish : req.body.no_of_publish,
        visit : req.body.visit
    })

    try{
        const b = await book.save();
        res.json(b);
    }

})

module.exports = router;