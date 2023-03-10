const mongoose = require("mongoose");

// Importar dotenv para las variables de la conexión de la base de datos
const dotenv = require("dotenv");

// Método para configurar las variables conexión a la base de datos
dotenv.config();

// Connecto to database
const connectDB = () => {
  // Método de conexión para la base de datos
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Las siguientes funciones permiten determinar el estado de la base de datos: conectada, desconectada o error en la conexión
  mongoose.connection.on("connected", () => {
    console.log("Base de datos conectada");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Base de datos desconectada");
  });

  mongoose.connection.on("error", () => {
    console.log("Error al conectar la base de datos", error.message);
  });
};
/*
 * ======================================
 *  Conexión Local
 * ======================================
 */

// URL base de datos local
// const URI = "mongodb://127.0.0.1:27017/devflix";

// const connectDB = () => {
//   mongoose
//     .connect(URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("Base de datos conectada"))
//     .catch(console.error);
// };

module.exports = connectDB;
