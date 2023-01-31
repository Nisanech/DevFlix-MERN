// Dependencias
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from 
"react-router-dom";
import { useDispatch } from "react-redux";

// Redux
import {setUser} from './redux/actions/authSlice'

// Páginas
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Componentes
import Header from "./components/Header/Header";

// Estilos
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}

        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
