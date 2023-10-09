import React, { useEffect, useState } from 'react'
import { getClassesBackend, getSpecificClassBackend } from '../axiosRequests/classesRequests';
import CoursesTable from '../components/CoursesTable';
import StudentsTable from '../components/StudentsTable';
import TestTable from '../components/TestTable';

function CoursesPage() {
  const [teacherClasses, setTeacherClasses] = useState()  
  const [students, setStudents] = useState([])  ;
  const [category, setCategory] = useState("students")
  const nameClasses = localStorage.getItem('nameClasses');
  useEffect(() => {
      getSpecificClassBackend()
        .then(answer=>{
          console.log(answer);
          setTeacherClasses(answer.data.infoClasses)
          setStudents(answer.data.students)
        })
        .catch(e=>console.log(e))
    }, [])
    console.log(teacherClasses);
  return (
    <div>
      <div className='bg-dark bg-opacity-75 text-white'>
        <div className='row text-center py-1' >
          <div className='col pt-3' ><button className='btn btn-danger' onClick={()=>setCategory("students")}>Estudiantes</button></div>
          <div className='col text-center pt-2'>
            <h4>{nameClasses}</h4>
          </div>
          <div className='col pt-3' ><button className='btn btn-danger' onClick={()=>setCategory("tests")}>Examenes</button></div>
        </div>
      </div>
      {
        category === "students" ?
        <StudentsTable students={students} infoClasses={teacherClasses}/>
        :
        <div>
          <TestTable infoClasses={teacherClasses} />
        </div>
      }
    </div>
  )
}

export default CoursesPage