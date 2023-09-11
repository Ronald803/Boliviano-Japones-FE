import React, { useEffect, useState } from 'react'
import { getExamsBackend } from '../axiosRequests/testsRequests';

function TestTable() {
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
    <div>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Level</th>
                    <th scope='col'>Points</th>
                </tr>
            </thead>
            <tbody>
                {
                    tests.map( (test,index)=>{
                        return(
                        <tr>
                            <th>
                                <span>{index}</span>
                            </th>
                            <td>
                                <span>{test.name}</span>
                            </td>
                            <td>
                                {
                                    test.points !== null
                                    ?
                                    <span>{test.points}</span>
                                    :
                                    <button className='btn btn-secondary btnSecondary' >Start</button>
                                }
                            </td>
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