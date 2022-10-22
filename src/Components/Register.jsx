import React from 'react'
 import { Link } from 'react-router-dom'


export const Register = () => {
  return (
    <div id="du">
       <h1>REGISTRATE</h1> <br/>
       <input type="text" placeholder="CREA UN USUARIO" id="usuario"></input><br></br><br></br>
       <input type="email" placeholder="INGRESA TU CORREO" id="usuario"></input><br></br><br></br>
       <input type="number" placeholder="  TELEFONO" id="usuario"></input><br></br><br></br>
       <input type="text" placeholder="INGRESE TU DIRECCION" id="usuario"></input><br></br><br></br>
       <input type="password" placeholder="CREA UNA CONTRASEÑA" id="usuario"></input><br></br><br></br>
       <button>REGISTRAR</button><br></br><br></br>
         
      <Link to='/'> VOLVER AL INICIO</Link>


    </div>
    
  )
}
