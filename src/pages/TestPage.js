import React, { useState } from 'react'
import TestTable from '../components/TestTable'

function TestPage() {
  const [takeTest, setTakeTest] = useState(false)
  return (
    <div>
      {
        takeTest === false ?
        <div>
          Tabla de examenes disponibles
          <TestTable></TestTable>
        </div>
        :
        <div>tomando el examen</div>
      }
    </div>
  )
}

export default TestPage