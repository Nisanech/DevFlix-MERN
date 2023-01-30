// Dependencias
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// Redux
import {register} from '../redux/actions/authSlice'

// Estilos
import {Form, FormGroup, Label, Input, Button, Spinner} from 'reactstrap'

// Estado inicial
const initialState = {
  firstName: "",
  lastName: "",
  email: '',
  password: '',
  confirmPassword: ""
}

const Register = () => {
  // Formulario
  const [formValue, setFormValue] = useState(initialState)

  const {loading, error} = useSelector((state) => ({...state.auth}))

  const {email, password, firstName, lastName, confirmPassword} = formValue

  // Dispatch
  const dispatch = useDispatch()

  // Navegación
  const navigate = useNavigate()

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  // Función para el envío del formulario
  const handleSubmit = e => {
    e.preventDefault()

    if(password !== confirmPassword) {
      return toast.error('La contraseña no coincide')
    }

    if(email && password && firstName && lastName && confirmPassword) {
      dispatch(register({formValue, navigate, toast}))
    }
  }

  // Función para capturar el valor del input cuando cambie
  const onInputChange = e => {
    let {name, value} = e.target

    setFormValue({...formValue, [name]: value})
  }

  return (
    <div style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "450px",
      alignContent: "center",
      marginTop: "120px",
    }}>
      <h5>Registro</h5>
      <Form onSubmit={handleSubmit} className='row g-3'>
        <div className='col-md-6'>
          <FormGroup>
            <Label for='firstName'>Nombre</Label>

            <Input id='firstName' name='firstName' placeholder='Nombre' type='text' value={firstName} onChange={onInputChange} required />
          </FormGroup>
        </div>

        <div className='col-md-6'>
          <FormGroup>
            <Label for='lastName'>Apellido</Label>

            <Input id='lastName' name='lastName' placeholder='Apellido' type='text' value={lastName} onChange={onInputChange} required />
          </FormGroup>
        </div>

        <div className='col-md-12'>
          <FormGroup>
            <Label for='email'>Correo</Label>

            <Input id='email' name='email' placeholder='Correo' type='email' value={email} onChange={onInputChange} required />
          </FormGroup>
        </div>
        
        <div className='col-md-12'>
          <FormGroup>
            <Label for='password'>Contraseña</Label>

            <Input id='password' name='password' placeholder='Contraseña' type='password' value={password} onChange={onInputChange} required />
          </FormGroup>
        </div>
        
        <div className='col-md-12'>
          <FormGroup>
            <Label for='confirmPassword'>Confirmar Contraseña</Label>

            <Input id='confirmPassword' name='confirmPassword' placeholder='Confirmar contraseña' type='password' value={confirmPassword} onChange={onInputChange} required />
          </FormGroup>
        </div>

        <div className='col-md-12'>
          <Button style={{ width: '100%' }}>
            {loading && (
              <Spinner/>
            )}
            Registrarse
          </Button>
        </div>
      </Form>

      <Link to='/login'>
        <p>¿Ya tienes una cuenta? | Inicia Sesión</p>
      </Link>
    </div>
  )
}

export default Register