import React from "react";

// Rutas
import Routes from "../routes/routes";

// Componentes
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Routes />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
