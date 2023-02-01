import React from "react";
import "./Header.css";
import { CiUser } from "react-icons/ci";
import img from "./logoblanco.png";
import File from "react-file-base64";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";


// Importar disparador de acciones de Redux
import { useDispatch, useSelector } from "react-redux";

// Importar acciones para el consumo de la API
import { createMovies} from "../../redux/actions/movieSlice";

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


const initialState = {
  mov_title:"",
  mov_year:"",
  mov_time:"",
  mov_lang:"",
  mov_dt_rel:"",
  mov_rel_country:"",
  description:"",
  actors:"",
  genre:"",
  director:"",
  rating:""
} 



const Header = () => {
 // Estado para ingressar datos de la pelicula
  const [movieData, setMovieData] = useState(initialState);
 
  const {error} = useSelector(state => ({...state.movie})) 
  // Se declara la constante para hacer uso del hook que dispara la acción del reducer
  const dispatch = useDispatch();

  const {
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
  } = movieData

  useEffect(()=>{
    error && toast.error(error)
  },[error])
  // Función para enviar el formulario al agregar una nueva tarea
  const onFormSubmit = (e) => {
    // Previene el evento por defecto del elemento
    e.preventDefault();

      if (
        mov_title && 
        mov_year && 
        mov_time &&
        mov_lang &&
        mov_dt_rel &&
        mov_rel_country &&
        description &&
        actors &&
        genre &&
        director &&
        rating 
        )   
        {
        const updateMovieData = {...movieData}
        dispatch(createMovies(updateMovieData, toast));
        
        handleClear()
      }
  };

  // Evento para capturar cuando el valor del input cambie
  const onInputChange = (e) => {
    const {name, value} = e.target
    setMovieData({
      ...movieData, [name]:value
    })
  };

  const handleClear = () =>{
    setMovieData (initialState)
  }

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
            srcset=""
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
                  onChange={onInputChange}
                  value={mov_title}
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
                  onChange={onInputChange}
                  value={director}
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
                  onChange={onInputChange}
                  value={mov_year}
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
                   onChange={onInputChange}
                   value={mov_dt_rel}
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
                  onChange={onInputChange}
                  value={actors}
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
                  onChange={onInputChange}
                  value={mov_lang}
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
                  onChange={onInputChange}
                  value={mov_rel_country}
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
                  onChange={onInputChange}
                  value={genre}
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
                  onChange={onInputChange}
                  value={mov_time}
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
                  onChange={onInputChange}
                  value={description}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile" sm={2}>
                  File
                </Label>
                <Col sm={10}>
                  <File type="file" multiple={false} onDone={({base64})=>setMovieData({...movieData, imageFile:base64})}/>
                  <FormText>Formato soportado (JPG, PNG)</FormText>
                </Col>
              </FormGroup>
            </Form>
            <ModalFooter>
              <Button color="primary" onClick={onFormSubmit}>
                Guardar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </header>
);
};

export default Header;
