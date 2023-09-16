import React, { useEffect, useState } from 'react'
import { getClassesBackend } from '../axiosRequests/classesRequests'
import errorAlert from './alerts/errorAlert'
import { postNewTestBackend } from '../axiosRequests/testsRequests'

function CreateTestForm(props) {
  const {infoTest,createTest} = props
  const [newTest, setNewTest] = useState({
    name:"",
    description:"",
    classes: [],
    questions:0,
    chapter:""
  })
  const [classesArray, setClassesArray] = useState([])
  useEffect(()=>{
    getClassesBackend()
      .then(classes=>{
        setClassesArray(classes.data)
      })
      .catch(e=>{console.log(e)})
  },[])
  const handleChangeClasses = (e) => {
    let auxArrayClasses = [];
    classesArray.map(classes=>{
      if(classes.level===e.target.value){ auxArrayClasses.push(classes._id) }
    })
    setNewTest({
      ...newTest,
      classes: auxArrayClasses
    })
  }
  const handleChange = (e) => {
    setNewTest({
      ...newTest,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    for(const property in newTest){
      if(!newTest[property]){
        return errorAlert("Todos los datos son necesarios para crear un nuevo examen")
      }
    }
    console.log(newTest);
    postNewTestBackend(newTest)
      .then(answer=>{
        console.log(answer);
        infoTest(newTest);
        createTest(true);
      })
      .catch(e=>{console.log(e)})
  }
  return (
    <div className='card mt-2' style={{"maxWidth":"600px","marginLeft":"auto","marginRight":"auto"}}>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label className='form-label' htmlFor='name'>Name of the Test:</label>
                    <input className='form-control' type='text' id='name' name='name' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='description'>Description or instrucitons</label>
                    <input className='form-control' type='text' id='description' name='description' onChange={handleChange}/>
                </div>
                <div className='mt-2'>
                    <label htmlFor='level' className='form-label' >Curso</label>
                    <select 
                        name='classes'
                        id='classes'
                        onChange={handleChangeClasses}
                        className=' form-control'
                    >
                        <option value="">Elige una opción</option>
                        {
                            classesArray?.map((classes,index)=>{
                              if(index%2===0){
                                return( <option value={classes.level} key={classes._id}>{classes.level}</option> )
                              }
                            })
                        }
                    </select>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='questions'>Number of Questions</label>
                    <input className='form-control' type='number' id='questions' name='questions' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='chapter'>Chapter:</label>
                    <input className='form-control' type='text' id='chapter' name='chapter' onChange={handleChange}/>
                </div>
                <button className='btn btn-dark'>Crear Nuevo Test</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTestForm