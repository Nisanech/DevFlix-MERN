// Dependencias
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

// Redux
import { setUser } from "./redux/actions/authSlice";

// Componentes
import Layout from "./layout/Layout";

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
    <div className="App">
      <ToastContainer />
      <Layout />
    </div>
  );
}

export default App;
