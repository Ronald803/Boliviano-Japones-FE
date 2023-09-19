import React, { useState } from 'react'
import TestTable from '../components/TestTable'
import TakingTheTest from '../components/TakingTheTest'
function TestPage() {
  const [idTestToTake, setIdTestToTake] = useState("")
  return (
    <div>
      {
        idTestToTake === "" ?
        <div>
          <TakingTheTest></TakingTheTest>
          <TestTable takeTheTest={setIdTestToTake}/>
        </div>
        :
        <div>
          <TakingTheTest idTest={idTestToTake} takeTheTest={setIdTestToTake}/>
        </div>
      }
    </div>
  )
}

export default TestPage