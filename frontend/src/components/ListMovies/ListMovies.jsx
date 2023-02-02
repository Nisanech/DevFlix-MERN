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
  mov_time,
  mov_lang,
  mov_dt_rel,
  mov_rel_country,
  description,
  actors,
  genre,
  director,
  rating
}) {


  
  return (
    <Card
      style={{
        backgroundColor: "white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "purple",
        color: "black",

      }}
    >
      <CardImg alt="Card image cap" src="https://media.gettyimages.com/id/1244034031/es/vector/cartel-de-cine-con-cola-tira-de-pel%C3%ADcula-y-clapper-vector.jpg?s=1024x1024&w=gi&k=20&c=cj5CEus6m_oMnzVm1OraiN7J9oCISeI6NU4c8t02b58="/>
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

        <Button>Ver más</Button>
      </CardBody>
    </Card>
  );
}
