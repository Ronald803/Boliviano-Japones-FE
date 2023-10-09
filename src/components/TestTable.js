import React, { useEffect, useState } from 'react'
import { getExamsBackend, getQuestionsToBackend } from '../axiosRequests/testsRequests';
import TestDemoTeacher from './TestDemoTeacher';

function TestTable(props) {
    const {takeTheTest,setTheQuestions,infoClasses} = props
    const [tests, setTests] = useState([]);
    const [questionsTest, setQuestionsTest] = useState([]);
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
        getQuestionsToBackend(idTest,'s')
            .then(answer=>{
                setTheQuestions(answer.data)
                takeTheTest(true)
            })
            .catch(error=>{console.log(error)})
    }
    const isTestEnable = (idTest) => {
        let enable = false;
        infoClasses?.testsAvailable.map(test=>{
            if(test===idTest){
                enable = true
            }
        })
        return enable
    }
    const getSpecificTest = (idTest) => {
        console.log(idTest);
        getQuestionsToBackend(idTest,'t')
            .then(answer=>{
                console.log(answer.data);
                setQuestionsTest(answer.data);
            })
            .catch(e=>console.log(e))
    }
  return (
    <div className='pt-2 mx-auto' style={{"maxWidth":"900px"}}>
        <TestDemoTeacher test={questionsTest}/>
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
                    <th scope='col'><div className='text-center'>Questions</div></th>
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
                            <th>
                                <div className='text-center'><span>{test.questions}</span></div>
                            </th>
                            {
                                rol==="teacher" && <th><div className='text-center'>
                                    {
                                        isTestEnable(test._id)
                                        ?
                                        <div>Examen habilitado para el curso</div>    
                                        :
                                        <button className='btn btn-secondary'>Habilitar Examen</button>   
                                    }
                                    </div></th>
                            }
                            {
                                rol==="teacher" 
                                && 
                                <th>
                                    <div className='text-center'>
                                        <button className='btn btn-secondary' onClick={()=>getSpecificTest(test._id)}>Ver Examen</button>
                                    </div>
                                </th>
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