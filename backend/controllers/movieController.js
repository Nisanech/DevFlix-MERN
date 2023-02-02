const Express = require("express");

//import model
const Movie = require("../models/movieModel");

//Create movie
const addMovie =async (request, response) =>{
    console.log(request.body)
    try{
        //save the information
        const newMovie = await Movie.create({
            mov_title : request.body.mov_title,
            mov_year : request.body.mov_year, 
            mov_time : request.body.mov_title, 
            mov_lang : request.body.mov_lang,
            mov_dt_rel : request.body.mov_dt_rel, 
            mov_rel_country : request.body.mov_rel_country, 
            description : request.body.description, 
            actors : request.body.actors, 
            genre : request.body.genre, 
            director : request.body.director, 
            rating : request.body.rating,
            imageFile: request.body.imageFile,
        });

        //save the information in the database
        await newMovie.save();

        //Returns status 200 if the request was created correctly
        return response.status(200).json(newMovie);
    }catch(error){
        console.log(error.message)
        // Return status 500 if there is an error sending the request
        return response.status(500).json(error.message);
    }
};

//Get all movies
const getAllMovies = async (request, response) =>{
    try{
        //only show movies whose visible property is true
        const movies = await Movie.find({visible: true});

        //Returns status 200 if the request was created correctly
        return response.status(200).json(movies);
    }catch(error){
        // Return status 500 if there is an error sending the request
        return response.status(500).send("Erroooooooooor");
    }
};

//Edit movie
const updateMovie = async (request, response) =>{
    try{
        //The information is updated with the findOneAndUpdate method and the properties are changed with the new information.
        await Movie.findOneAndUpdate(
            {_id:request.params.id},
            {
                mov_title : request.body.mov_title,
                mov_year : request.body.mov_year, 
                mov_time : request.body.mov_title, 
                mov_lang : request.body.mov_lang,
                mov_dt_rel : request.body.mov_dt_rel, 
                mov_rel_country : request.body.mov_rel_country, 
                description : request.body.description, 
                actors : request.body.actors, 
                genre : request.body.genre, 
                director : request.body.director, 
                rating : request.body.rating,
                imageFile: request.body.imageFile,  
            }
        );

        // The findById method is executed to search for the movie by the selected id
        const movie = await Movie.findById(request.params.id);
        //Returns status 200 if the request was created correctly
        return response.status(200).json(movie);
    }catch(error){
        // Return status 500 if there is an error sending the request
        return response.status(500).json(error.message);
    }
};

//Delete movie
const deleteMovie = async (request, response) =>{
    try{
        // The findById method is executed to search for the movie by the selected id
        const movieRef = await Movie.findById(request.params.id);
        // Returning a unique id updates that movie with the findOneAndUpdate method and changes the visible property to false to indicate that the task was removed.
        const movie = await Movie.findOneAndUpdate(
            {_id: request.params.id},
            {visible: !movieRef.visible}
        );

        // Method to save the information in the database
        await movie.save();

        //Returns status 200 if the request was created correctly
        return response.status(200).json(movie);
    }catch (error){
        // Return status 500 if there is an error sending the request
        return response.status(500).json(error.message);
    }
};

// All controller functions are exported
exports.getAllMovies = getAllMovies;
exports.addMovie = addMovie;
exports.updateMovie = updateMovie;
exports.deleteMovie = deleteMovie;

