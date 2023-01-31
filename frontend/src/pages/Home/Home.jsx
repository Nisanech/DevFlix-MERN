import React from 'react';
import "./Home.css";
import CardMovie from '../../components/CardMovie/CardMovie';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <main>
        <CardMovie/>
      </main>
      <Footer className="footerHome"/>
    </div>
  )
}

export default Home