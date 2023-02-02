import React from "react";
import "./Header.css";
import { CiUser } from "react-icons/ci";
import img from "./logoblanco.png";
import File from "react-file-base64";

import {useState} from "react";

// Importar disparador de acciones de Redux
import { useDispatch } from "react-redux";

// Importar acciones para el consumo de la API
import { addNewMovie } from "../../redux/actions";


import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  Label,
  FormGroup,
  Form,
  Input,
  Col,
  FormText,
} from "reactstrap";


const Header = () => {
 // Estado para ingressar datos de la pelicula
  const [mov_title, setMov_title] = useState("");
  const [mov_year, setMov_year] = useState("");
  const [mov_time, setMov_time] = useState("");
  const [mov_lang, setMov_lang] = useState("");
  const [mov_dt_rel, setMov_dt_rel] = useState("");
  const [mov_rel_country, setMov_rel_country] = useState("");
  const [description, setDescription] = useState("");
  const [actors, setActors] = useState("");
  const [genre , setGenre ] = useState("");
  const [director, setDirector] = useState("");
  

  // Se declara la constante para hacer uso del hook que dispara la acción del reducer
  const dispatch = useDispatch();

  // Función para enviar el formulario al agregar una nueva tarea
  const onFormSubmit = (e) => {
    // Previene el evento por defecto del elemento
    e.preventDefault();
        var movie = {
          mov_title: mov_title,
          mov_year:mov_year,
          mov_time:mov_time,
          mov_lang:mov_lang,
          mov_dt_rel:mov_dt_rel,
          mov_rel_country:mov_rel_country,
          description:description,
          actors:actors,
          genre:genre,
          director:director
        }

        console.log(movie)

        dispatch(addNewMovie(mov_title));
        dispatch(addNewMovie(mov_year));
        dispatch(addNewMovie(mov_time));
        dispatch(addNewMovie(mov_lang));
        dispatch(addNewMovie(mov_dt_rel));
        dispatch(addNewMovie(mov_rel_country));
        dispatch(addNewMovie(description));
        dispatch(addNewMovie(actors));
        dispatch(addNewMovie(genre));
        dispatch(addNewMovie(director));
        
        // setMov_title("");
        // setMov_year("");
        // setMov_time("");
        // setMov_lang("");
        // setMov_dt_rel("");
        // setMov_rel_country("");
        // setDescription("");
        // setActors("");
        // setGenre(""); 
        // setDirector("");
        
      
  };

  //Use state para activación de la ventana modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <header className="head">
      <div className="conta">
        <div className="logo">
          <img
            className="logoDevflix"
            src={img}
            alt="imagen logo peliculas"
            srcSet=""
          />
        </div>

        <div className="info">
          <div className="icon">
            <CiUser className="icongr"></CiUser>
          </div>
          <div>
            <h1> Name</h1>
            <h2> Administrador</h2>
          </div>
        </div>

        {/* MODAL */}
        <div>
          <Button className="add" onClick={toggle}>
            + Agregar
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Agregar Película</ModalHeader><br/>

            <Form onSubmit={onFormSubmit}>
              <FormGroup>
                <Label for="exampleText" >
                  Título Película
                </Label>
                <Input
                  name="mov_title"
                  type="text"
                  placeholder="Título"
                  value={mov_title}
                  onChange={(e) => setMov_title(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  Director
                </Label>
                <Input
                  name="director"
                  type="text"
                  placeholder="Director"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  Año
                </Label>
                <Input
                  name="mov_year"
                  type="text"
                  placeholder="Año"
                  value={mov_year}
                  onChange={(e) => setMov_year(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleDate">
                  Estreno
                </Label>
                <Input
                   name="mov_dt_rel"
                   type="date"
                   placeholder="Estreno"
                   value={mov_dt_rel}
                   onChange={(e) => setMov_dt_rel(e.target.value)}
                   required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  Reparto
                </Label>
                <Input
                  name="actors"
                  type="text"
                  placeholder="Reparto"
                  value={actors}
                  onChange={(e)=>setActors(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  Idioma
                </Label>
                <Input
                  name="mov_lang"
                  type="text"
                  placeholder="Idioma"
                  value={mov_lang}
                  onChange={(e)=>setMov_lang(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  País
                </Label>
                <Input
                  name="mov_rel_country"
                  type="text"
                  placeholder="País"
                  value={mov_rel_country}
                  onChange={(e)=> setMov_rel_country(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  Género
                </Label>
                <Input
                  name="genre"
                  type="text"
                  placeholder="Género"
                  value={genre}
                  onChange={(e)=>setGenre(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  Duración
                </Label>
                <Input
                  name="mov_time"
                  type="text"
                  placeholder="Duración de la película"
                  value={mov_time}
                  onChange={(e)=>setMov_time(e.target.value)}
                  required
                />
                <FormText style={{color: "black"}}>Duración en minutos</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">
                  Descripción
                </Label>
                <Input
                  name="description"
                  type="text"
                  placeholder="Descripción de la película"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile" sm={2}>
                  File
                </Label>
                <Col sm={10}>
                  <File type="file" multiple={false}/>
                  <FormText>Formato soportado (JPG, PNG)</FormText>
                </Col>
              </FormGroup>
            <ModalFooter>
              <Button color="primary" onClick={onFormSubmit}>
                Guardar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
            </Form>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
