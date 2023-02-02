// Dependencias
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom'

// Acciones de redux
import { setLogout } from "../../redux/actions/authSlice";

// Iconos
import { CiUser } from "react-icons/ci";
import img from "./logoblanco.png";

// Estilos
import { Button } from "reactstrap";
import "./Header.css";

const Header = () => {
  // Dispatch para disparar la acción del reducer
  const dispatch = useDispatch();

<<<<<<< HEAD
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
  const onFormSubmit  = async(e) => {
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
        console.log(updateMovieData)

        try {
          const res = fetch("http://localhost:5000/movies/movie/new", {method: "POST",
          headers:{
              "Content-Type":"application/json"
              
          },body : JSON.stringify(updateMovieData)          
        
        })
        const json = res.json();
        console.log(json)          
        } catch (error) {
          console.log(error)          
        }

        /* dispatch(createMovies(updateMovieData, toast)); */
        
        handleClear()
      }
=======
  // Función para cerrar la sesión
  const handleLogout = () => {
    dispatch(setLogout());
>>>>>>> 1e30ec26b747c331cf661cf9cec1e6896f636113
  };

  // Destructurar el valor del usuario logueado
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <header className="head">
      <div className="conta">
        <div className="logo">
          <img className="logoDevflix" src={img} alt="imagen logo peliculas" />
        </div>
        {user?.result?._id && (
        <div className="info">
          <div className="icon">
            <CiUser className="icongr"></CiUser>
          </div>
          <div>
            
              <h1 style={{ color: "white", fontSize: "20px" }}>
                {user?.result?.name}
              </h1>
            
          </div>
        </div>
        )}

        {user?.result?._id && (
          <>
            <NavLink to='/addMovie'>
              <Button className="add">+ Agregar</Button>
            </NavLink>
          </>
        )}

<<<<<<< HEAD
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
                <Label for="exampleText">
                  rating
                </Label>
                <Input
                  name="rating"
                  type="text"
                  placeholder="rating pelicula"
                  onChange={onInputChange}
                  value={rating}
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
=======
        {user?.result?._id ? (
          <>
          <NavLink to='/' onClick={handleLogout}>
            <Button className="add">Cerrar sesión</Button>
          </NavLink>
        </>
        ) : (
          <NavLink to='/login' onClick={handleLogout}>
            <Button className="add">Ingresar</Button>
          </NavLink>
        )}
>>>>>>> 1e30ec26b747c331cf661cf9cec1e6896f636113
      </div>
    </header>
);
};

export default Header;
