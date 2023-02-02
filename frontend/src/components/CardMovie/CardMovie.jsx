import React from "react";
import "./CardMovie.css";
import image from "./spiritedaway.png";

const CardMovie = () => {
  return (
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
              <p>Nombre director</p>
              <h3>AÑO</h3>
              <p>2002</p>
              <h3>ESTRENO</h3>
              <p>dd/mm/aaaa</p>
              <h3>GENERO</h3>
              <p>Nombre genero</p>
              <h3>DURACIÓN</h3>
              <p>tiempo en minutos</p>
            </div>
            <div className="info2">
              <h3>REPARTO</h3>
              <p>Nombre del reparto</p>
              <h3>PAÍS</h3>
              <p>Nombre del país</p>
              <h3>LENGUAJE</h3>
              <p>Idioma</p>
              <h3>VALORACIÓN</h3>
              <p>Valoracion</p>
            </div>
          </div>
        </div>
      </div>
      <h3>DESCRIPCIÓN</h3>
      <p className="description">
        El filme cuenta la historia de una niña de diez años llamada Chihiro,
        quien durante una mudanza se ve atrapada en un mundo mágico y
        sobrenatural, teniendo como misión buscar su libertad y la de sus
        padres, y así poder regresar a su mundo.
      </p>
      <div className="buttons">
        <button className="editButton">Editar</button>
        <button className="deleteButton">Eliminar</button>
      </div>
    </div>
  );
};

export default CardMovie;
