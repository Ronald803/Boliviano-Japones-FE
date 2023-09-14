import React, { useEffect, useState } from 'react'
import { getExamsBackend } from '../axiosRequests/testsRequests';

function TestTable(props) {
    const {takeTheTest} = props
    const [tests, setTests] = useState([]);
    useEffect(() => {
        getExam()
    }, []);
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
    
  return (
    <div className='mx-auto' style={{"maxWidth":"500px"}}>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th scope='col'><div className='text-center'>#</div></th>
                    <th scope='col'><div className='text-center'>Name</div></th>
                    <th scope='col'><div className='text-center'>Points</div></th>
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
                            <th>
                                <div className='text-center'>
                                {
                                    test.points !== null
                                    ?
                                    <span>{test.points}</span>
                                    :
                                    <button className='btn btn-secondary btnSecondary' onClick={()=>takeTheTest(test._id)}>Start</button>
                                }
                                </div>
                            </th>
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