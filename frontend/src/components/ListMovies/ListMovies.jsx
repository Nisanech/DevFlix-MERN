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
}) {
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "purple",
      }}
    >
      <CardImg alt="Card image cap" src={imgprueba} />
      <CardBody>
        <CardTitle tag="h5">{mov_title}</CardTitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {mov_year}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {director}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {actors}
        </CardSubtitle>

        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {rating}
        </CardSubtitle>

        <Button>Ver más</Button>
      </CardBody>
    </Card>
  );
}
