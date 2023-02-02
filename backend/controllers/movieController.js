// Importamos el modelo
const { default: mongoose } = require("mongoose");
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

// Función para obtener la información de una película
const getMovie = async(req, res) => {
  const {id} = req.params

  try {
    const movie = await movieModel.findById(id)

    res.status(200).json(movie)
  } catch (error) {
    res.status(404).json({message: 'Algo salió mal'})
  }
}

// Actualizar información de la película
const updateMovie = async (req, res) => {
  const {id} = req.params

  const {
    mov_title,
    mov_year,
    mov_time,
    mov_lang,
    mov_rel_country,
    description,
    actors,
    genre,
    director,
    rating,
    imageFile,
    name,
  } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({message: `La película con el id: ${id} no existe` })
    }

    const updatedMovie = {
      mov_title,
    mov_year,
    mov_time,
    mov_lang,
    mov_rel_country,
    description,
    actors,
    genre,
    director,
    rating,
    imageFile,
    name,
    _id: id
    }

    await movieModel.findByIdAndUpdate(id, updatedMovie, {new: true})

    res.json(updatedMovie)
  } catch (error) {
    res.status(400).json({message: "Algo salió mal"})
  }
}

exports.createMovie = createMovie
exports.getMovies = getMovies
exports.getMovie = getMovie
exports.updateMovie = updateMovie
