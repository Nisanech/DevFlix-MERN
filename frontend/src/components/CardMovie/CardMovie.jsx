import "./CardMovie.css";
import image from "./spiritedaway.png";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { updateMovie } from "../../redux/actions/index";
const CardMovie = ({ movie }) => {
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(movie?.data);

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
    dispatch(updateMovie(movie._id, editing, title, director, year, premiere, gender, time, description, cast, country, language, rating));
  };

  return (
    <>
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
            className="todo-input edit"
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
        <div className="cardPpal">
          {/* IMAGEN */}
          <div className="sideImg">
            <img className="imgMovie" src={image} alt="" />
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
                    className="todo-input edit"
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
                    className="todo-input edit"
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
                    type="text"
                    value={premiere}
                    className="todo-input edit"
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
                    className="todo-input edit"
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
                    className="todo-input edit"
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
                    className="todo-input edit"
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
                    className="todo-input edit"
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
                    className="todo-input edit"
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
                    className="todo-input edit"
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
          <input
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
          <button className="deleteButton">Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default CardMovie;

/* <div className="card">
<div className="cardMovie">
  <h2>GLADIADOR</h2>
  <div className="cardPpal">
    <div className="image">
      <img className="imgPeli"src={image} alt="" />
    </div>
    <div className="infoMovie">
      <h3>DIRECTOR</h3>
      <p>Nombre director</p>
      <h3>AÑO</h3>
      <p>2002</p>
      <h3>ESTRENO</h3>
      <p>dd/mm/aaaa</p>
      <h3>GENERO</h3>
      <p>Nombre genero</p>
      <h3>REPARTO</h3>
      <p>Nombre del reparto</p>
      <h3>LENGUAJE</h3>
      <p>Idioma</p>
      <h3>DESCRIPCION</h3>
      <p>Nombre descripcion</p>
      
<div className="buttons">
        <button className="editButton">Editar</button>
        <button className="deleteButton">Eliminar</button>
</div>
    </div>
  </div>
</div>
</div> */
