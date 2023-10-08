import React, { useEffect, useState } from 'react'
import { getExamsBackend, getQuestionsToBackend } from '../axiosRequests/testsRequests';

function TestTable(props) {
    const {takeTheTest,setTheQuestions} = props
    const [tests, setTests] = useState([]);
    useEffect(() => {
        getExam()
    }, []);
    const rol = localStorage.getItem('r')
    const getExam = async (parametro)=>{
        getExamsBackend()
            .then( tests => {
                console.log(tests.data);
                setTests(tests.data)
            })
            .catch( e => {
                console.log({e});
            } )
    }
    const chooseTest = (idTest)=>{
        getQuestionsToBackend(idTest)
            .then(answer=>{
                setTheQuestions(answer.data)
                takeTheTest(true)
            })
            .catch(error=>{console.log(error)})
    }
    
  return (
    <div className='pt-2 mx-auto' style={{"maxWidth":"900px"}}>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th scope='col'><div className='text-center'>#</div></th>
                    <th scope='col'><div className='text-center'>Name</div></th>
                    {
                        rol==="student" && <th scope='col'><div className='text-center'>Points</div></th>
                    }
                    {
                        rol==="teacher" && <th scope='col'><div className='text-center'>Level</div></th>
                    }
                    {
                        rol==="teacher" && <th scope='col'><div className='text-center'></div></th>
                    }
                    {
                        rol==="teacher" && <th scope='col'><div className='text-center'></div></th>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tests.map( (test,index)=>{
                        return(
                        <tr>
                            <th>
                                <div className='text-center'><span>{index}</span></div>
                            </th>
                            <th>
                                <div className='text-center'><span>{test.name}</span></div>
                            </th>
                            {
                                rol==="student"
                                &&
                                <th>
                                    <div className='text-center'>
                                    {
                                        test.points !== null
                                        ?
                                        <span>{test.points}</span>
                                        :
                                        <button className='btn btn-secondary btnSecondary' onClick={()=>chooseTest(test._id)}>Start</button>
                                    }
                                    </div>
                                </th>
                            }
                            {
                                rol==="teacher" && <th><div className='text-center'><span>{test.level}</span></div></th>
                            }
                            {
                                rol==="teacher" && <th><div className='text-center'><button className='btn btn-secondary'>Habilitar Examen</button></div></th>
                            }
                            {
                                rol==="teacher" && <th><div className='text-center'><button className='btn btn-secondary'>Ver Examen</button></div></th>
                            }
                        </tr>
                        )
                    } )
                }
            </tbody>
        </table>
    </div>
  )
}

export default TestTable