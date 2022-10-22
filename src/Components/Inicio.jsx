import React from 'react'
import { Link } from 'react-router-dom'




const Inicio = () => {
  return (
    <div id="du">
        <h1>BIENVENIDO</h1>
           <input type="text" placeholder="INGRESE USUARIOS" id="usuario"></input><br></br><br></br>
           <input type="password" placeholder="INGRESE CONTRASEÑA" id="usuario"></input><br></br><br></br>
        <Link to='/Registro'>REGISTRATE</Link>
        <br />
        <Link to='/rem-pass'>¿OLVIDASTE TU CONTRASEÑA</Link>

    </div>
  )
}

export default Inicio