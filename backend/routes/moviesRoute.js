//import express
const express = require("express");
const router = express.Router();

//Get functionality from controller

const{ createMovie, getMovies, getMovie, updateMovie } = require("../controllers/movieController");


//Routes to the API
router.get("/", getMovies); //Get Movies
router.post("/new", createMovie); //Create Movie
router.get('/:id', getMovie) // Ver detalle de la película
router.put('/:id', updateMovie)

module.exports = router;