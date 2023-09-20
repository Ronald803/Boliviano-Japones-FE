import React, { useEffect } from 'react'

function TakingTheTest(props) {
  //const {takeTheTest,idTest} = props
  let questions = [];
  useEffect(() => {
    // peticion para obtener todas las preguntas de backend  
}, []);
  questions = [{
    _id:"642668bcc945127343e59260",
    question: "How _____ your parents?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    studentAnswer: ""
  },{
    _id:"642668bcc945127343e59261",
    question: "When _____ your birthday?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    studentAnswer: ""
  },{
    _id:"642668bcc945127343e59262",
    question: "How old _________ you?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    studentAnswer: ""
  },
  {
    _id:"642668bcc945127343e59263",
    question: "_____ I late?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    studentAnswer: ""
  }
]
  const handleChange = (value,questionID,index)=>{
    if(questionID===questions[index]._id){
      questions[index].studentAnswer = value
    }
  }
  const checkTheAnswers = () => {
    console.log(questions);
    // TODO: request the answers from backend, compare and update "questions"
  }
    return (
  <div className='pt-2 '>
    <div className=' question-list mx-auto' style={{"maxWidth":"700px"}}>
      {questions.map( (question,index) => (
        <div key={question._id} className='card mb-2 bg-danger'>
          <div className='card-header'>
            <h5 className='card-body text-white'>{index+1}. {question.question}</h5>
          </div>
            {question.possibleAnswers.map(answer => (
              <div key={question._id+answer} id='answer' className='form-check card-header'>
                <input 
                    name={question._id} 
                    type='radio' 
                    id={answer+question._id} 
                    value={answer}
                    onClick={()=>handleChange(answer,question._id,index)}
                    className='form-check-input ms-4'
                />                                
                <label for={answer+question.id} className='form-check-label ps-4 text-white'><h5>{answer}</h5></label>
              </div>
            ))}          
        </div>
      ))}
      <div className='text-center mb-2'>
        <button className='btn btn-warning border border-black' onClick={()=>{checkTheAnswers()}}>Revisar Examen</button>            
      </div>
    </div>
  </div>
  )
}

export default TakingTheTest