//import express
const express = require("express");
const router = express.Router();

//Get functionality from controller

const{
    addMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
} = require("../controllers/movieController");


//Routes to the API
router.get("/movies", getAllMovies); //Get Movies
router.post("/movie/new", addMovie); //Create Movie
router.put("/movie/editMovie/:id", updateMovie); //Edit Movie
router.get("/movie/toggleDelete/:id", deleteMovie); //Delete Movie

module.exports = router;