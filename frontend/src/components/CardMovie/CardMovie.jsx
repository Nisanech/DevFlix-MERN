
import "./CardMovie.css";
import image from "./spiritedaway.png";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import {updateMovie} from "../../redux/actions/index"
const CardMovie = ({movie}) => {

  const [editing, setEditing] = useState(false);


  const [text, setText] = useState(movie?.data);

  const dispatch = useDispatch();

  // Función para el envío del formulario al actualizar la tarea
  const onFormSubmit = (e) => {
    // Previene el evento por defecto del elemento
    e.preventDefault();

    // Permite leer el estado previo
    setEditing((prevState) => !prevState);

    // Se dispara la acción del reducer para actualizar la tarea recibiendo el id y la nueva información
    dispatch(updateMovie(movie._id, text));
  };

  return (
  <>
    <div className="card2">
      <h2 className="titleMovie">NOMBRE DE LA PELÍCULA</h2>
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

                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
                
                
                <h3>AÑO</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
                <h3>ESTRENO</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
                <h3>GENERO</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
                <h3>DURACIÓN</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
              </div>
              <div className="info2">
                <h3>REPARTO</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
                <h3>PAÍS</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
                <h3>LENGUAJE</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
                <h3>VALORACIÓN</h3>
                <p style={{ display: editing ? "none" : "" }}>{movie?.director}</p>
                <form 
                style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    value={text}
                    className="todo-input edit"
                    onChange={(e) => setText(e.target.value)}
                  />
                </form>
              </div>

            </div>
          
        </div>
      </div>
      <h3>DESCRIPCIÓN</h3>
      <p className="description" style={{ display: editing ? "none" : "" }}>{movie?.director}
      </p>
      <div className="buttons">
        <button className="editButton" onClick={() => setEditing((prevState) => !prevState)}>Editar</button>
        <button className="deleteButton">Eliminar</button>
      </div>
    </div>
    </>
  );
};

export default CardMovie;

{
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
}
