import React, { useEffect, useState } from 'react'
import { getClassesBackend, getSpecificClassBackend } from '../axiosRequests/classesRequests';
import CoursesTable from '../components/CoursesTable';
import StudentsTable from '../components/StudentsTable';

function CoursesPage() {
    let teacherClasses={infoClasses:{},students:[]};
    useEffect(() => {
      getSpecificClassBackend()
        .then(answer=>{
          console.log(answer);
          teacherClasses.infoClasses = answer.data.infoClasses;  
          teacherClasses.students = answer.data.students
        })
        .catch(e=>console.log(e))
    }, [])
    console.log(teacherClasses);
  return (
    <div>
      <StudentsTable students={teacherClasses.students}/>
    </div>
  )
}

export default CoursesPage