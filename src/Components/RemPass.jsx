import React from 'react'
import { Link } from 'react-router-dom'



export const RemPass = () => {
  return (
    <div id="d">
            
           <h2>OLVIDASTE LA CONTRASEÑA</h2><br></br>
            <label>INGRESA TU CORREO </label><br></br><br></br>
            <input type="email" id="usuario"></input><br></br><br></br>
       <br/>
      <Link to='/'>VOLVER AL INICIO</Link>

    </div>
   
  )
}
