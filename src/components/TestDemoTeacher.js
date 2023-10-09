import React from 'react'

function TestDemoTeacher(props) {
    const {test} = props
  return (
    <div>
        <div className='text-center'><button className='btn btn-warning'>Volver</button></div>
        <div className='row'>
        {test.map( question => (
            <div className='card my-2 col' key={question._id}>
              <div className='card-header'>
                <h5>{question.question}</h5>
              </div>    
              <div className=' card-header'>
                  {question.possibleAnswers.map(answer => (
                      <h5 
                          className='card-header ps-4'
                          key={question._id+answer}
                          style={
                              {
                                  backgroundColor: answer===question.answer 
                                  && 
                                  'lightGreen' 
                              }
                              }
                      >
                          {answer}
                      </h5>
                  ))}
              </div>
                  
              </div>
        ))}  
        </div>
    </div>
  )
}

export default TestDemoTeacher