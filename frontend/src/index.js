import React from "react";
import ReactDOM from "react-dom/client";


// Importar provider para hacer uso del contexto con redux
import { Provider } from "react-redux";

// Importar store de redux
import store from "./redux/store";

// Componentes
import App from "./App";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
