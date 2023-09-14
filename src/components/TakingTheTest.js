import React from 'react'

function TakingTheTest(props) {
    const {takeTheTest,idTest} = props
  return (
    <div>
        TakingTheTest
        {idTest}
        <button onClick={()=>takeTheTest("")}>Finalizar el examen</button>
    </div>
  )
}

export default TakingTheTest