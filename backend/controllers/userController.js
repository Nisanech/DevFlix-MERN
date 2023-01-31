// Importar dependencias que permiten hashear la contraseña
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Importamos el modelo
const userModel = require('../models/userModel')

// Key para el token
const secret = 'test'

// Controlador para el ingreso del usuario
const signin = async (req, res) => {
  // Definimos los valores que se requieren para validar el ingreso al sistema
  const {email, password} = req.body

  try {
    // Validamos si el usuario ya está registrado
    const oldUser = await userModel.findOne({email})

    if(!oldUser) return res.status(400).json({message: "El usuario no existe"})

    // Validamos si la contraseña es correcta
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if(!isPasswordCorrect) return res.status(400).json({message: 'Contraseña incorrecta'})

    // Token
    const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: '1h'})

    res.status(200).json({result: oldUser, token})
  } catch (error) {
    res.status(500).json({message: "Algo salió mal"})
    console.log(error)
  }
}

// Controlador para el registro del usuario
const signup = async (req, res) => {
  // Declaramos los valores que se insertaran en la colección de Usuarios
  const {email, password, firstName, lastName} = req.body

  try {
    // Validamos si el usuario ya se encuentra registrado
    const oldUser = await userModel.findOne({email})

    if(oldUser) {
      return res.status(400).json({message: 'El usuario ya esta registrado'})
    }

    // Si el usuario no se encuentra registrado
    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await userModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`
    })

    // Generamos el token
    const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: '1h'})

    res.status(201).json({result, token})
  } catch (error) {
    res.status(500).json({message: "Algo salió mal"})
    console.log(error)
  }
}

// Exportar los métodos
exports.signup = signup
exports.signin = signin