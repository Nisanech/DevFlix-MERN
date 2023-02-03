// Dependencias
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { getMovies } from "../redux/actions/movieSlice";

// Componentes
import ListMovies from "../components/ListMovies/ListMovies";
import Footer from "../components/Footer/Footer";

// Estilos
import {Spinner} from 'reactstrap'
import "./Home.css";

const Home = () => {
  const { movies, loading } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (loading) {
    return (<Spinner>Cargando</Spinner>)
  }

  return (
    <>
      <div className="home">
        {/* Filtros */}
        <div className="general-container">
          <div className="container_ListMovies">
            <div className="name-filter_ListMovies">
              <p style={{ margin: "25px" }}>Todas las películas</p>
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
          </div>
        </div>

        <div className="container_movies">
          {movies &&
            movies.map((item, index) => <ListMovies key={index} {...item} />)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
