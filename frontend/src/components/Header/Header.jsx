import React from 'react'
import "./Header.css"
import { CiUser } from 'react-icons/ci';
import img from "./logoblanco.png";

const Header = () => {
    
  return (
    <header className='head'> 
            
        <div className='conta'>
                <div className='logo'>
                    <img className="logoDevflix"src={img} alt="imagen logo peliculas" srcset="" />
                </div>
            
            <div className='info'>
                
                <div className='icon'>
                    <CiUser className='icongr'></CiUser> 
                </div>
                <div>
                    <h1> Name</h1>
                    <h2> Administrador</h2>
                </div>
            </div>
            
            <div className=''>
                <button className='add'> + Agregar </button>
            </div>
        </div>
    </header>
  );
};

export default Header;
