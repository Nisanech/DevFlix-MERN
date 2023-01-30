//Allows you to work with the database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Structure of the collection in the database
const MovieSchema = new Schema({
    //imformation movie
    mov_title:{
        type: String,
        required: true,
        trim:true,
    },
    mov_year:{
        type: String,
        required: true,
        trim:true,
    }, 
    mov_time:{
        type: String,
        required: true,
        trim:true,
    }, 
    mov_lang:{
        type: String,
        required: true,
        trim:true,
    },
    mov_dt_rel:{
        type: Date,
        required: true,
        trim:true,
    }, 
    mov_rel_country:{
        type: String,
        required: true,
        trim:true,
    }, 
    description:{
        type: String,
        required: true,
        trim:true,
    }, 
    actors:{
        type: String,
        required: true,
        trim:true,
    }, 
    genre:{
        type: String,
        required: true,
        trim:true,
    }, 
    director:{
        type: String,
        required: true,
        trim:true,
    }, 
    rating : {
        type: String,
        required: true,
        trim:true,
    },

    //information deleted or not
    visible:{
        type:Boolean,
        default: true,
    },
    imageFile:{
        type: String,
        required: true,
        trim: true,
    }
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;