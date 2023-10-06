import React from 'react'

function StudentsTable(props) {
    const {students} = props;
    console.log(students);
    return (
    <div className='pt-2 mx-auto' style={{"maxWidth":"550px"}}>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th scope='col'><div className='text-center'>#</div></th>
                    <th scope='col'><div className='text-center'>Name</div></th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map( (student,index)=>{
                        return(
                        <tr>
                            <th>
                                <div className='text-center'><span>{index}</span></div>
                            </th>
                            <th>
                                <div className='text-center'><span>{student.name}</span></div>
                            </th>
                            {/* {
                                rol==="student"
                                &&
                                <th>
                                    <div className='text-center'>
                                    {
                                        student.points !== null
                                        ?
                                        <span>{student.points}</span>
                                        :
                                        <button className='btn btn-secondary btnSecondary' onClick={()=>chooseTest(student._id)}>Start</button>
                                    }
                                    </div>
                                </th>
                            }
                            {
                                rol==="teacher" && <th><div className='text-center'><span>{student.level}</span></div></th>
                            }
                            {
                                rol==="teacher" && <th><div className='text-center'><button className='btn btn-secondary'>Ver Examen</button></div></th>
                            } */}
                        </tr>
                        )
                    } )
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentsTable