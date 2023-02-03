// Importar express, mongoose y variables de entorno
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Importar Cors para las peticiones HTTP
const cors = require("cors");
const morgan = require("morgan");

// Importar archivo con la conexión de la base de datos
const connectDB = require("./mongoDB");

// Importar archivo con las rutas del usuario
const userRoute = require("./routes/userRoute");

//Import file movies
const movieRoute = require("./routes/moviesRoute");

// Inicializar el servidor de express
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Usar cors
app.use(cors());
// Usar conexión de la base de datos
connectDB();

// Endpoints
app.use("/users", userRoute);

// Endpoints movies
app.use("/movies", movieRoute);


// Puerto de conexión del servidor
const PORT = process.env.PORT || 5000;

// Conexión del servidor
app.get("/", (req, res) => {
  res.send("Hola desde el servidor");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
