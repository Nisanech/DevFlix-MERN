// Dependencias
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// Redux
import {login} from '../redux/actions/authSlice'

// Estilos
import {Form, FormGroup, Label, Input, Button, Spinner} from 'reactstrap'

// Estado inicial
const initialState = {
  email: '',
  password: '',
}

const Login = () => {
  // Formulario
  const [formValue, setFormValue] = useState(initialState)

  const {loading, error} = useSelector((state) => ({...state.auth}))

  const {email, password} = formValue

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

    if (email && password) {
      dispatch(login({formValue, navigate, toast}))
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
      <Form onSubmit={handleSubmit} className='row g-3'>
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
          <Button style={{ width: '100%' }}>
            {loading && (
              <Spinner/>
            )}
            Ingresar
          </Button>
        </div>
      </Form>
    </div>
  )
  }

export default Login;