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

  // Función para cerrar la sesión
  const handleLogout = () => {
    dispatch(setLogout());
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
      </div>
    </header>
);
};

export default Header;
