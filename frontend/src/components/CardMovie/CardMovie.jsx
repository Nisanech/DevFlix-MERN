import "./CardMovie.css";
// import image from "./spiritedaway.png";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { updateMovie, deleteMovie } from "../../redux/actions/index";
const CardMovie = ({ movie }) => {
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(movie?.data);

  const [img, setImg] = useState(movie?.data);

  const [director, setDirector] = useState(movie?.data);

  const [year, setYear] = useState(movie?.data);

  const [premiere, setPremiere] = useState(movie?.data);

  const [gender, setGender] = useState(movie?.data);

  const [time, setTime] = useState(movie?.data);

  const [description, setDescription] = useState(movie?.data);

  const [cast, setCast] = useState(movie?.data);

  const [country, setCountry] = useState(movie?.data);

  const [language, setLanguage] = useState(movie?.data);

  const [rating, setRating] = useState(movie?.data);

  const dispatch = useDispatch();

  // Función para el envío del formulario al actualizar la tarea
  const onFormSubmit = (e) => {
    // Previene el evento por defecto del elemento
    e.preventDefault();

    // Permite leer el estado previo
    setEditing((prevState) => !prevState);

    // Se dispara la acción del reducer para actualizar la tarea recibiendo el id y la nueva información
    dispatch(
      updateMovie(
        movie._id,
        editing,
        title,
        director,
        year,
        premiere,
        gender,
        time,
        description,
        cast,
        country,
        language,
        rating
      )
    );
  };

  return (
    <div className="card2">
      <h2 className="titleMovie" style={{ display: editing ? "none" : "" }}>
        NOMBRE DE LA PELÍCULA
      </h2>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={title}
          className="movie-input edit"
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <div className="cardPpal">
        {/* IMAGEN */}
        <div className="sideImg">
          <img
            className="imgMovie"
            style={{ display: editing ? "none" : "" }}
          ></img>
          <form
            style={{ display: editing ? "inline" : "none" }}
            onSubmit={onFormSubmit}
          >
            <input
              type="file"
              value={img}
              className="edit"
              onChange={(e) => setImg(e.target.value)}
            />
          </form>
        </div>

        {/* INFO MOVIE */}
        <div className="sideInfo">
          <div className="infoMovie">
            <div className="info1">
              <h3>DIRECTOR</h3>

              <p style={{ display: editing ? "none" : "" }}>{movie?.data}</p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={director}
                  className="movie-input edit"
                  onChange={(e) => setDirector(e.target.value)}
                />
              </form>

              <h3>AÑO</h3>
              <p style={{ display: editing ? "none" : "" }}>
                {movie?.director}
              </p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={year}
                  className="movie-input edit"
                  onChange={(e) => setYear(e.target.value)}
                />
              </form>
              <h3>ESTRENO</h3>
              <p style={{ display: editing ? "none" : "" }}>
                {movie?.director}
              </p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="date"
                  value={premiere}
                  className="movie-input edit"
                  onChange={(e) => setPremiere(e.target.value)}
                />
              </form>
              <h3>GENERO</h3>
              <p style={{ display: editing ? "none" : "" }}>
                {movie?.director}
              </p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={gender}
                  className="movie-input edit"
                  onChange={(e) => setGender(e.target.value)}
                />
              </form>
              <h3>DURACIÓN</h3>
              <p style={{ display: editing ? "none" : "" }}>
                {movie?.director}
              </p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={time}
                  className="movie-input edit"
                  onChange={(e) => setTime(e.target.value)}
                />
              </form>
            </div>
            <div className="info2">
              <h3>REPARTO</h3>
              <p style={{ display: editing ? "none" : "" }}>
                {movie?.director}
              </p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={cast}
                  className="movie-input edit"
                  onChange={(e) => setCast(e.target.value)}
                />
              </form>
              <h3>PAÍS</h3>
              <p style={{ display: editing ? "none" : "" }}>
                {movie?.director}
              </p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={country}
                  className="movie-input edit"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </form>
              <h3>LENGUAJE</h3>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={language}
                  className="movie-input edit"
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </form>
              <h3>VALORACIÓN</h3>
              <p style={{ display: editing ? "none" : "" }}>
                {movie?.director}
              </p>
              <form
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={rating}
                  className="movie-input edit"
                  onChange={(e) => setRating(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <h3>DESCRIPCIÓN</h3>
      <p className="description" style={{ display: editing ? "none" : "" }}>
        {movie?.director}
      </p>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <textarea
          type="text"
          value={description}
          className="todo-input edit"
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
      <div className="buttons">
        <button
          className="editButton"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          Editar
        </button>
        <button
          className="deleteButton"
          onClick={() => dispatch(deleteMovie(movie._id))}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardMovie;
