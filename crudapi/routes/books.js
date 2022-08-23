const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    // console.log('Get request');
    res.send('Get Request');

    // try{
    //     const books = 
    // }catch(err){
    //     res.send('Error ')
    // }

})

module.exports = router;