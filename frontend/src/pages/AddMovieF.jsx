// Dependencias
import React, { useState, useEffect } from "react";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Acciones de redux
import { createMovies } from "../redux/actions/movieSlice";

// Estilos
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBSpinner,
} from "mdb-react-ui-kit";

// Se declara el estado inicial para el valor de cada input
const initialState = {
  mov_title: "",
  mov_year: "",
  mov_time: "",
  mov_lang: "",
  mov_rel_country: "",
  description: "",
  actors: [],
  genre: "",
  director: "",
  rating: "",
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
      handleClear() 
    }
  };

  // Función para capturar cuando el valor del input cambie
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  // Funciones para eliminar o agregar varios actores
  const handleAddActor = (actor) => {
    setMovieData({ ...movieData, actors: [...movieData.actors, actor] });
  };

  const handleDeleteActor = (deleteActor) => {
    setMovieData({
      ...movieData,
      actors: movieData.actors.filter((actor) => actor !== deleteActor),
    });
  };

  const handleClear = () => {
    setMovieData({
      mov_title: "",
      mov_year: "",
      mov_time: "",
      mov_lang: "",
      mov_rel_country: "",
      description: "",
      actors: [],
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
        marginBottom: "40px",
      }}
    >
      <h5>Agregar Película</h5>
      <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Título"
            value={mov_title}
            name="mov_title"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={mov_title.toString()}
            validation="Ingresa el título"
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Año"
            value={mov_year}
            name="mov_year"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={mov_year.toString()}
            validation="Ingresa el Año"
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Duración"
            value={mov_time}
            name="mov_time"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={mov_time.toString()}
            validation="Ingresa el Duración"
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Idioma"
            value={mov_lang}
            name="mov_lang"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={mov_lang.toString()}
            validation="Ingresa el Idioma"
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="País"
            value={mov_rel_country}
            name="mov_rel_country"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={mov_rel_country.toString()}
            validation="Ingresa el País"
          />
        </div>
        <div className="col-md-12">
          <textarea
            type="text"
            placeholder="Descripción"
            value={description}
            name="description"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={description.toString()}
            validation="Ingresa el Descripción"
          />
        </div>
        <div className="col-md-12">
          <ChipInput
            variant="outlined"
            placeholder="Actores"
            fullWidth
            value={actors}
            name="actors"
            onAdd={(actor) => handleAddActor(actor)}
            onDelete={(actor) => handleDeleteActor(actor)}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Género"
            value={genre}
            name="genre"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={genre.toString()}
            validation="Ingresa el Género"
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Director"
            value={director}
            name="director"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={director.toString()}
            validation="Ingresa el Director"
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Rating"
            value={rating}
            name="rating"
            onChange={onInputChange}
            className="form-control"
            required
            invalid={rating.toString()}
            validation="Ingresa el Rating"
          />
        </div>

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
          <MDBBtn style={{ width: "100%"}} className="mt-3">
            Guardar
          </MDBBtn>
          <MDBBtn
            style={{ width: "100%" }}
            className="mt-2"
            color="danger"
            onClick={handleClear}
          >
            Limpiar
          </MDBBtn>
        </div>
      </MDBValidation>
    </div>
  );
};

export default AddMovie;
