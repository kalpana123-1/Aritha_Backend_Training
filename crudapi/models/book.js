const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required:true
    },
    author_name:{
        type:String,
        required: true
    },
    year_of_publish:{
        type:Number,
        required:true
    },
    no_of_publish:{
        type:Number,
        required:true
    },
    visit:{
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Book', bookSchema);
