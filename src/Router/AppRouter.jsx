import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from '../Components/Inicio'
import { Register } from '../Components/Register'
import { RemPass } from '../Components/RemPass'

const AppRouter = () => {
  return (

    <BrowserRouter>
    
        <Routes>

            <Route path= '/' element={ <Inicio />}/>
            <Route path= '/registro' element={ <Register />}/>
            <Route path= 'rem-pass' element={ <RemPass />}/>
          

        </Routes>
    
    </BrowserRouter>

  )
}

export default AppRouter