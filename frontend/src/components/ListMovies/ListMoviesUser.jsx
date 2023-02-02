// Dependencias
import React from "react";
import { Link } from "react-router-dom";

// Estilos
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./ListMovies.css";

export default function ListMovies({
  mov_title,
  mov_year,
  director,
  actors,
  rating,
  imageFile,
  _id,
}) {
  return (
    <Card
    style={{
      backgroundColor: "white",
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "purple",
    }}
      className="cardListPpal"
    >
      <CardImg style={{height:"15rem", width:"10rem"}} alt="Card image cap" src={imageFile} />
      <CardBody>
        <CardTitle tag="h5">{`Título: ${mov_title}`}</CardTitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Año: ${mov_year}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Director: ${director}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Elenco: ${actors}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Rating: ${rating}`}
        </CardSubtitle>


        <div className="buttonsCardList">
        <Link to={`/movie/${_id}`}>
          <Button>Ver más</Button>
        </Link>
          <Button className="mt-3">Editar</Button>
          <Button className="mt-3">Eliminar</Button>
        </div>
      </CardBody>
    </Card>
  );
}
