import React, { useState } from 'react'
import Translator from './Translator'

function Navbar() {
  const [translator, setTranslator] = useState(false)
  return (
  <div style={{"position":"relative"}} className='bg-danger'>
    <div style={{"position":"absolute","left":"0px","top":"0px","width":"100%"}} className='text-center pt-1 my-0 '><a className="navbar-brand text-white m-0" href="/"><h3 className='my-0'>UE Boliviano Japonés B</h3></a></div>
    <nav  className="navbar navbar-expand-lg bg-transparent pt-4 pb-1">
      <div className="container-fluid">
        <div onClick={()=>setTranslator(!translator)}>
          <a className="nav-link text-white " href="#">Traductor</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav text-end">
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
          <div className='bg-danger z-3 rounded' style={{"position":"absolute","right":"0px","top":"30px","minWidth":"300px"}}>
            <Translator/>
          </div>
        </div>
      }
    </nav>
  </div>
  )
}

export default Navbar