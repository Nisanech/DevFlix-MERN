import React from "react";

// Componentes
import Header from '../components/Header/Header'
import ListMovies from '../components/ListMovies/ListMovies'
import CardMovie from '../components/CardMovie/CardMovie'

const Home = () => {
  return (
    <>
      <Header />
      <CardMovie/>
      <ListMovies/>
    </>
  )
};

export default Home;
