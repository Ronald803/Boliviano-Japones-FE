import React, { useEffect, useState } from 'react'
import { getClassesBackend } from '../axiosRequests/classesRequests';

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
    <div>CoursesPage</div>
  )
}

export default CoursesPage