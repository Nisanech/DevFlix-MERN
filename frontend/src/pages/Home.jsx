import React from "react";
import "./Home.css"

// Componentes
import Header from '../components/Header/Header'
import ListMovies from '../components/ListMovies/ListMovies'
import CardMovie from '../components/CardMovie/CardMovie'

const Home = () => {
  return (
    <>
    <div className='home'>
      <Header />
      <main>
      <CardMovie />
      </main>
      <ListMovies/>
    </div>
    </>
  )
};

export default Home;
