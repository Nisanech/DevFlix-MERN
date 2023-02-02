//import express
const express = require("express");
const router = express.Router();

//Get functionality from controller

const{ createMovie, getMovies } = require("../controllers/movieController");


//Routes to the API
router.get("/", getMovies); //Get Movies
router.post("/new", createMovie); //Create Movie

module.exports = router;