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

export default function ListMovies(second) {
  function GetMovieInformation() {}

  return (
    <>
      <div className="general-container">
        <div className="container_ListMovies">
          <div className="name-filter_ListMovies">
            <p style={{ margin: "0" }}>Todas las películas</p>
            <select name="select">
              <option value="value0" selected>
                Género
              </option>
              <option value="value1">Drama</option>
              <option value="value2">Misterio</option>
              <option value="value3">Acción</option>
              <option value="value4">Musical</option>
              <option value="value5">Fantástico</option>
              <option value="value6">Suspenso</option>
              <option value="value7">Aventura</option>
              <option value="value8">Romance</option>
              <option value="value9">Crimen</option>
              <option value="value10">Animación</option>
              <option value="value11">Comedia</option>
              <option value="value12">Thriller</option>
              <option value="value13">Horror</option>
            </select>
          </div>

          <div className="container_movies">
            <Card
              style={{
                backgroundColor: "transparent",
                borderWidth: "3px",
                borderStyle: "solid",
              }}
            >
              <CardImg alt="Card image cap" src={imgprueba} />
              <CardBody>
                <CardTitle tag="h5">Movie title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Año:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Director:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Reparto:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Calificación:
                </CardSubtitle>
                <Button onClick={GetMovieInformation}>Ver más</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={imgprueba} />
              <CardBody>
                <CardTitle tag="h5">Movie title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Año:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Director:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Reparto:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Calificación:
                </CardSubtitle>
                <Button onClick={GetMovieInformation}>Ver más</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={imgprueba} />
              <CardBody>
                <CardTitle tag="h5">Movie title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Año:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Director:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Reparto:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Calificación:
                </CardSubtitle>
                <Button onClick={GetMovieInformation}>Ver más</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={imgprueba} />
              <CardBody>
                <CardTitle tag="h5">Movie title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Año:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Director:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Reparto:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Calificación:
                </CardSubtitle>
                <Button onClick={GetMovieInformation}>Ver más</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={imgprueba} />
              <CardBody>
                <CardTitle tag="h5">Movie title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Año:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Director:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Reparto:
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Calificación:
                </CardSubtitle>
                <Button onClick={GetMovieInformation}>Ver más</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
