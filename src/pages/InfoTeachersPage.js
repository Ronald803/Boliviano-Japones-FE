import React from 'react'

function InfoTeachersPage() {
  return (
    <div className='pt-3'>
      <div className="card mx-auto bg-danger border" style={{"maxWidth":"600px"}}>
        <div className="card-body">
          <h5 className="card-title text-center text-white mt-2">Unidad Educativa</h5>
          <h2 className="card-title text-center text-white">Boliviano Japonés B</h2>
          <h5 className="text-white text-center bg-transparent mt-4">NIVEL SECUNDARIO COMUNITARIO PRODUCTIVO</h5>
          <h5 className="text-white text-center bg-transparent">AREA LENGUA EXTRANJERA</h5>
          <div className='card-body border rounded bg-dark bg-opacity-75 mt-4'>
            <h4 className="text-white text-center bg-transparent">Plantel Docente</h4>
            <div className='row pt-4'>
              <div className='col-sm-4'>
                <img src='./img/teacher.jpg' className='img-fluid'/>
                <p className="text-white pt-2 text-center bg-transparent">Prof. Dina Navarro Quintanilla</p>  
              </div>              
              <div className='col-sm-4'>
                <img src='./img/teacher.jpg' className='img-fluid'/>
                <p className="text-white pt-2 text-center bg-transparent">Prof. Casilda Choque Tapia</p>            
              </div>
              <div className='col-sm-4'>
                <img src='./img/teacher.jpg' className='img-fluid'/>
                <p className="text-white pt-2 text-center bg-transparent">Prof. Lezly Ivonne Villca Canqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoTeachersPage

