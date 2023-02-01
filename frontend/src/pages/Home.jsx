import React from "react";
import "./Home.css";
import Footer from "../components/Footer/Footer";

// Componentes
import Header from '../components/Header/Header'
import ListMovies from '../components/ListMovies/ListMovies'
import CardMovie from '../components/CardMovie/CardMovie'
import Footer from '../components/Footer/Footer'
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
    <Footer/>
    </>
  )
};

export default Home;
