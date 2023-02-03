// Dependencias
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux
import { setUser } from "./redux/actions/authSlice";

// Páginas
import Login from './pages/Login'
import Register from './pages/Register'
import AddMovie from './pages/AddMovie'
import ViewMovie from './pages/ViewMovie'
import Dashboard from './pages/Dashboard'

// Componentes
import Header from './components/Header/Header'

// Estilos
import "react-toastify/dist/ReactToastify.css";
/* import "./App.css"; */

function App() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <ToastContainer />

        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/editMovie/:id" element={<AddMovie />} />
          <Route path="/movie/:id" element={<ViewMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
