import React from 'react'

function TakingTheTest(props) {
  //const {takeTheTest,idTest} = props
  let questions = [{
    _id:"642668bcc945127343e59260",
    question: "How _____ your parents?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    answer: ""
  },{
    _id:"642668bcc945127343e59261",
    question: "When _____ your birthday?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    answer: ""
  },{
    _id:"642668bcc945127343e59262",
    question: "How old _________ you?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    answer: ""
  },
  {
    _id:"642668bcc945127343e59263",
    question: "_____ I late?",
    possibleAnswers:  ["am","is","are"],
    test: "as8asd98f832899adf",
    answer: ""
  }
]
  const handleChange = (value,questionID,index)=>{
    if(questionID===questions[index]._id){
      questions[index].answer = value
    }
  }
  const checkTheAnswers = () => {
    console.log(questions);
  }
    return (
    <div className='question-list'>
      {questions.map( (question,index) => (
        <div key={question._id} className='card mb-2'>
          <h4 className='card-header'>{index+1}. {question.question}</h4>
            {question.possibleAnswers.map(answer => (
              <div key={question._id+answer} id='answer' className='form-check'>
                <input 
                    name={question._id} 
                    type='radio' 
                    id={answer+question._id} 
                    value={answer}
                    onClick={()=>handleChange(answer,question._id,index)}
                    className='form-check-input'    
                />                                
                <label for={answer+question.id} className='form-check-label'>{answer}</label>
              </div>
            ))}
        </div>
      ))}
      <button onClick={()=>{checkTheAnswers()}}>Revisar Examen</button>            
    </div>
  )
}

export default TakingTheTest