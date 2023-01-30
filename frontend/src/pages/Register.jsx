import React from 'react';
import "./Register.css";

const Register = () => {
  return (
    <div className="card">
    <div className="cardMovie">
    <h2>GLADIADOR</h2>
    <div className="image">
         <img src="" alt="" />
       </div>
       <div className="infoMovie">
         <h3>DIRECTOR</h3>
         <p>Nombre director</p>
         <h3>AÑO</h3>
         <p>2002</p>
         <h3>GENERO</h3>
         <p>Nombre genero</p>
         <h3>REPARTO</h3>
         <p>Nombre del reparto</p>
         <h3>DESCRIPCION</h3>
         <p>Nombre descripcion</p>
         <button>Editar</button>
         <button>Eliminar</button>
       </div>
    </div>
    </div>
  )
}

export default Register;