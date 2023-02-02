// Dependencia de mongoose
const mongoose = require("mongoose");

// Creamos el schema para la colección
const movieSchema = mongoose.Schema({
  mov_title: String,
  mov_year: String,
  mov_time: String,
  mov_lang: String,
  mov_rel_country: String,
  description: String,
  actors: String,
  genre: String,
  director: String,
  rating: String,
  rating: String,
  name: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
