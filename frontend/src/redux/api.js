// Importamos axios para el consumo de la API
import axios from 'axios'

// Se declara la constante para la URL de la API
const API = axios.create({baseURL: 'http://localhost:5000'}) // URL Local

// Petición para el inicio de sesión
export const signIn = (formData) => API.post("/users/signin", formData)

// Petición para el registro de usuario
export const signUp = (formData) => API.post("/users/signup", formData)