// Dependencias
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Acciones de redux
import { createMovies } from "../redux/actions/movieSlice";

// Estilos
import { Button, FormGroup, Form, Input, Nav } from "reactstrap";
import Footer from "../components/Footer/Footer";

// Se declara el estado inicial para el valor de cada input
const initialState = {
  mov_title: "",
  mov_year: "",
  mov_time: "",
  mov_lang: "",
  mov_rel_country: "",
  description: "",
  actors: "",
  genre: "",
  director: "",
  rating: "",
  imageFile: "",
};

const AddMovie = () => {
  // Estado de los inputs
  const [movieData, setMovieData] = useState(initialState);

  // Constante para mostrar si hay errores al enviar la información
  const { error, loading } = useSelector((state) => ({ ...state.movie }));

  //   Se destructura la información del usuario que ingresó al sistema
  const { user } = useSelector((state) => ({ ...state.auth }));

  //   Dispatch para disparar la acción
  const dispatch = useDispatch();

  //   Redireccionar
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  // Se destructura el valor del estado inicial
  const {
    mov_title,
    mov_year,
    mov_time,
    mov_lang,
    mov_rel_country,
    description,
    actors,
    genre,
    director,
    rating,
  } = movieData;

  //   Función para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      mov_title &&
      mov_year &&
      mov_time &&
      mov_lang &&
      mov_rel_country &&
      description &&
      actors &&
      genre &&
      director &&
      rating
    ) {
      const updateMovieData = { ...movieData, name: user?.result?.name };

      dispatch(createMovies({ updateMovieData, navigate, toast }));
      handleClear();
    }
  };

  // Función para capturar cuando el valor del input cambie
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  // Función para limpiar el formulario
  const handleClear = () => {
    setMovieData({
      mov_title: "",
      mov_year: "",
      mov_time: "",
      mov_lang: "",
      mov_rel_country: "",
      description: "",
      actors: "",
      genre: "",
      director: "",
      rating: "",
    });
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "20px",
        maxWidth: "600px",
        alignContent: "center",
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      <h5>Agregar Película</h5>

      <Form onSubmit={handleSubmit} className="row g-3">
        <FormGroup>
          <Input
            type="text"
            placeholder="Título"
            value={mov_title}
            name="mov_title"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="Año"
            value={mov_year}
            name="mov_year"
            onChange={onInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            placeholder="Duración"
            value={mov_time}
            name="mov_time"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="Idioma"
            value={mov_lang}
            name="mov_lang"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="País"
            value={mov_rel_country}
            name="mov_rel_country"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="textarea"
            placeholder="Descripción"
            value={description}
            name="description"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="Actores"
            value={actors}
            name="actors"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="Género"
            value={genre}
            name="genre"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="Director"
            value={director}
            name="director"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            placeholder="Rating"
            value={rating}
            name="rating"
            onChange={onInputChange}
            required
          />
        </FormGroup>

        <div className="d-flex justify-content-start mt-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setMovieData({ ...movieData, imageFile: base64 })
            }
          />
        </div>

        <div className="col-12">
          <Button style={{ width: "100%" }}>Guardar</Button>
        </div>
        <NavLink to="/" className="col-12">
          <Button style={{ width: "100%", marginBottom:"15px"}}>Cancelar</Button>
        </NavLink>
      </Form>
    </div>
  );
};

export default AddMovie;
