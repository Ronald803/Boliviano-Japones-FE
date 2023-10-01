import React, { useEffect, useState } from 'react'
import { getClassesBackend } from '../axiosRequests/classesRequests';
import CoursesTable from '../components/CoursesTable';

function CoursesPage() {
    const auxClasses = localStorage.getItem('c').split(',');
    const [classes, setClasses] = useState([])
    let teacherClasses = [];
    useEffect(() => {
      getClassesBackend()
        .then(answer=>{
            let allClasses = answer.data;
            auxClasses.map(classes => {
                allClasses.map(c=>{
                    if(c._id === classes){
                        teacherClasses.push(c)
                    }
                })
            } )
        })
        .catch(e=>{console.log(e)})
    }, [])
    console.log(auxClasses);
    console.log(teacherClasses);
  return (
    <div>
      CoursesPage
      <CoursesTable data={teacherClasses}/>
    </div>
  )
}

export default CoursesPage