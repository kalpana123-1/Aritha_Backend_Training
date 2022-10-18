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
module.exports = router;