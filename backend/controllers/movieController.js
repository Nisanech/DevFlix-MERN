// Importamos el modelo
const movieModel = require("../models/movieModel");

// Función para crear la película
const createMovie = async (req, res) => {
  const movie = req.body;

  const newMovie = new movieModel({
    ...movie,
    createdAt: new Date().toISOString(),
  });

  try {
    await newMovie.save();

    res.status(201).json(newMovie);
  } catch (error) {
    res.status(404).json({ messsage: "Algo salió mal" });
  }
};

// Función para listar todas las películas
const getMovies = async (req, res) => {
    try {
      const movies = await movieModel.find({ visible: true });

      res.status(200).json(movies);
    } catch (error) {
      res.status(404).json({ messsage: "Algo salió mal" });
    }
}

exports.createMovie = createMovie
exports.getMovies = getMovies
