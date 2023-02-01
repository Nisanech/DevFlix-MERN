import React from "react";
import "./Header.css";
import { CiUser } from "react-icons/ci";
import img from "./logoblanco.png";


import { useState } from "react";

// Importar disparador de acciones de Redux
import { useDispatch } from "react-redux";

// Importar acciones para el consumo de la API
import { addNewMovie } from "../../redux/actions/index";

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
  // Estado para el valor del input
  const [text, setText] = useState("");
  // Se declara la constante para hacer uso del hook que dispara la acción del reducer
  const dispatch = useDispatch();

  // Función para enviar el formulario al agregar una nueva tarea
  const onFormSubmit = (e) => {
    // Previene el evento por defecto del elemento
    e.preventDefault();

    // Se dispara la acción del reducer para agregar la tarea recibiendo la información o nombre de la tarea
    dispatch(addNewMovie(text));

    // Valor por defecto del estado
    setText("");
  };
  // Evento para capturar cuando el valor del input cambie
  const onInputChange = (e) => {
    setText(e.target.value);
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
            <ModalHeader toggle={toggle}>Agregar Película</ModalHeader>

            <Form onSubmit={onFormSubmit}>
              <FormGroup>
                <Label for="exampleText" style={{ color: "black" }}>
                  Título Película
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="text"
                  placeholder="Título"
                  onChange={onInputChange}
                  value={text}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText" style={{ color: "black" }}>
                  Director
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="text"
                  placeholder="Director"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText" style={{ color: "black" }}>
                  Año
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="number"
                  placeholder="Año"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleDate" style={{ color: "black" }}>
                  Estreno
                </Label>
                <Input
                  id="exampleDate"
                  name="date"
                  placeholder="Estreno"
                  type="date"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText" style={{ color: "black" }}>
                  Reparto
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="text"
                  placeholder="Reparto"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect" style={{ color: "black" }}>
                  Idioma
                </Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Español</option>
                  <option>Inglés</option>
                  <option>Alemán</option>
                  <option>Ruso</option>
                  <option>Mandarín</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect" style={{ color: "black" }}>
                  País
                </Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Inglaterra</option>
                  <option>Estados Unidos</option>
                  <option>Francia</option>
                  <option>China</option>
                  <option>Otros</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect" style={{ color: "black" }}>
                  Género
                </Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Drama</option>
                  <option>Misterio</option>
                  <option>Acción</option>
                  <option>Musical</option>
                  <option>Fantástico</option>
                  <option>Suspenso</option>
                  <option>Aventura</option>
                  <option>Romance</option>
                  <option>Crimen</option>
                  <option>Animación</option>
                  <option>Comedia</option>
                  <option>Thriller</option>
                  <option>Horror</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText" style={{ color: "black" }}>
                  Duración
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="number"
                  placeholder="Duración de la película"
                />
                <FormText>Duración en minutos</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText" style={{ color: "black" }}>
                  Descripción
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  placeholder="Descripción de la película"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile" sm={2}>
                  File
                </Label>
                <Col sm={10}>
                  <Input id="exampleFile" name="file" type="file" />
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
