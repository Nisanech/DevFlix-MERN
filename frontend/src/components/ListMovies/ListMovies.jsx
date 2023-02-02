import "./ListMovies.css";
import imgprueba from "./braveheart.png";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function ListMovies({
  mov_title,
  mov_year,
  director,
  actors,
  rating,
  mov_time,
  mov_lang,
  mov_dt_rel,
  mov_rel_country,
  description,
  genre,
  imageFile
}) {
  return (
    <Card className="cardListPpal"
      style={{
        backgroundColor: "white",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "purple",
      }}
    >
      <CardImg alt="Card image cap" src={imageFile} />
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

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Duración: ${mov_time}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Lenguaje: ${mov_lang}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Estreno: ${mov_dt_rel}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`País: ${  mov_rel_country}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Descripción: ${description}`}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`Genero: ${genre}`}
        </CardSubtitle>

        <div className="buttonsCardList">
          <Button>Editar</Button>
          <Button>Eliminar</Button>
        </div>
      </CardBody>
    </Card>
  );
}
