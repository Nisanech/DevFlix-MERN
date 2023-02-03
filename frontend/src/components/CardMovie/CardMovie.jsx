import React from "react";
import { NavLink } from "react-router-dom";
import "./CardMovie.css";

const CardMovie = ({
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
}) => {
  return (
    <>
      <div className="card2">
        <h2 className="titleMovie">{mov_title}</h2>
        <div className="cardPpal">
          {/* IMAGEN */}
          <div className="sideImg">
            <img className="imgMovie" src={imageFile} alt="" />
          </div>

          {/* INFO MOVIE */}
          <div className="sideInfo">
            <div className="infoMovie">
              <div className="info1">
                <h3>DIRECTOR</h3>
                <p>{director}</p>
                <h3>AÑO</h3>
                <p>{mov_year}</p>
                {/* <h3>ESTRENO</h3>
              <p>dd/mm/aaaa</p> */}
                <h3>GENERO</h3>
                <p>{genre}</p>
                <h3>DURACIÓN</h3>
                <p>{`${mov_time} minutos`}</p>
              </div>
              <div className="info2">
                <h3>REPARTO</h3>
                <p>{actors}</p>
                <h3>PAÍS</h3>
                <p>{mov_rel_country}</p>
                <h3>LENGUAJE</h3>
                <p>{mov_lang}</p>
                <h3>VALORACIÓN</h3>
                <p>{rating}</p>
              </div>
            </div>
          </div>
        </div>
        <h3>DESCRIPCIÓN</h3>
        <p className="description">{description}</p>
        <div className="buttons">
          <NavLink to="/home">
            <button style={{ width: "100%" }}>Volver</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CardMovie;
