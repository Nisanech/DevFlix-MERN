// Dependencias
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./login.css";


// Redux
import { login } from "../redux/actions/authSlice";

// Estilos
import { Form, FormGroup, Label, Spinner } from "reactstrap";

// Estado inicial
const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  // Formulario
  const [formValue, setFormValue] = useState(initialState);

  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const { email, password } = formValue;

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

    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };

  // Función para capturar el valor del input cuando cambie
  const onInputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="fondo">
    <div className="containerLogin">
      <Form onSubmit={handleSubmit} className="rowLogin">
        <div className="colLogin">
          <h1 className="Principal">Iniciar Sesión</h1>
          <FormGroup>
            <Label className="user-label" for="email">
              Correo
            </Label>

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
            <Label className="user-label" for="password">
              Contraseña
            </Label>

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
          <button className="Ingresar">
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
            <span>Ingresar</span>
          </button>
        </div>
      </Form>

      <Link to="/register">
        <p className="olvidar">¿No tienes una cuenta? | Registrate</p>
      </Link>
    </div>
    </div>
  );
};

export default Login;
