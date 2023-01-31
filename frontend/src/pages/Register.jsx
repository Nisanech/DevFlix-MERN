// Dependencias
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// Redux
import { register } from "../redux/actions/authSlice";

// Estilos
import { Form, FormGroup, Label, Spinner } from "reactstrap";
import "./register.css";

// Estado inicial
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  // Formulario
  const [formValue, setFormValue] = useState(initialState);

  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const { email, password, firstName, lastName, confirmPassword } = formValue;

  // Dispatch
  const dispatch = useDispatch();

  // Navegación
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  // Función para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("La contraseña no coincide");
    }

    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };

  // Función para capturar el valor del input cuando cambie
  const onInputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className='fondo'>
    <div className='containerRegister'>
      <h2 className="Principal">Registrarse</h2>
      <Form onSubmit={handleSubmit} className='row'>
        <div className='col'>
          <FormGroup>
            <Label for="firstName">Nombre</Label>
            <input
              className="input"
              id="firstName"
              name="firstName"
              placeholder="Nombre"
              type="text"
              value={firstName}
              onChange={onInputChange}
              required
            />
          </FormGroup>
        </div>

        <div className="col-md-6">
          <FormGroup>
            <Label for="lastName">Apellido</Label>

            <input
              className="input"
              id="lastName"
              name="lastName"
              placeholder="Apellido"
              type="text"
              value={lastName}
              onChange={onInputChange}
              required
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <Label for="email">Correo</Label>

            <input
              className="input"
              id="email"
              name="email"
              placeholder="Correo"
              type="email"
              value={email}
              onChange={onInputChange}
              required
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <Label for="password">Contraseña</Label>

            <input
              className="input"
              id="password"
              name="password"
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={onInputChange}
              required
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <Label for="confirmPassword">Confirmar Contraseña</Label>

            <input
              className="input"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              type="password"
              value={confirmPassword}
              onChange={onInputChange}
              required
            />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <button className="Registrar">
            {loading && <Spinner />}
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Registrarse</span>
          </button>
          <img src="" alt="" />
        </div>
      </Form>

      <Link to="/">
        <p className="olvidar">¿Ya tienes una cuenta? | Inicia Sesión</p>
      </Link>
    </div>
    </div>
  );
};

export default Register;
