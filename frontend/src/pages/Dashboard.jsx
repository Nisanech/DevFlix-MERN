// Dependencias
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { getMovies } from "../redux/actions/movieSlice";

// Componentes
import ListMoviesUser from "../components/ListMovies/ListMoviesUser";
import Footer from "../components/Footer/Footer";

// Estilos
import { Spinner } from "reactstrap";
import "./Home.css";

const Dashboard = () => {
  const { movies, loading } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (loading) {
    return <Spinner>Cargando</Spinner>;
  }
  return (
    <>
      <div className="home">
        <div className="container_movies">
          {movies &&
            movies.map((item, index) => 
            <>
                <ListMoviesUser key={index} {...item}/>
            </>
            )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
