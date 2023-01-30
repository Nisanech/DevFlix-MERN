// Dependencias
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Componentes
import Header from "./components/Header/Header";

// Estilos
import "./App.css";
import ListMovies from "./components/ListMovies/ListMovies";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ListMovies/>
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
