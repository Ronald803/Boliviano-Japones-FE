import React, { useState } from 'react'
import Translator from './Translator'

function Navbar() {
  const [translator, setTranslator] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">UE Boliviano Japonés B</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav text-end">
            <li onClick={()=>setTranslator(!translator)}>
              <a className="nav-link text-white " href="#">Traductor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="/test">Tareas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="/users">Usuarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="/infoTeachers">Plantel Docente</a>
            </li>
          </ul>
        </div>
      </div>
      {
        translator 
        &&
        <div className='' style={{"position":"relative"}}>
          <div className='bg-danger' style={{"position":"absolute","right":"0px","top":"30px","minWidth":"300px"}}>
            <Translator/>
          </div>
        </div>
      }
    </nav>
  )
}

export default Navbar