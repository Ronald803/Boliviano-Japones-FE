import axios from 'axios'

const t = localStorage.getItem('t')
const r = localStorage.getItem('r')
//const url = 'https://learn-english-backend-bay.vercel.app';
const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function getExamsBackend(){
    return axios.get(`${url}/api/tests/${r}`,{headers:{'x-token': t}})
}

export function getQuestionsToBackend(idTest){
    return axios.get(`${url}/api/questions/s?test=${idTest}`,{headers:{'x-token': t}})
}

export function postNewTestBackend(newTest){
    return axios.post(`${url}/api/tests`,newTest,{headers:{'x-token': t}})
}

export async function saveQuestionsBackend(newQuestions){
    console.log(newQuestions);
    let questionsAddedToBackend = await Promise.all(
        newQuestions.map(q=>{
            return axios.post(`${url}/api/questions`,q,{headers:{'x-token': t}})
        })
    )
    return questionsAddedToBackend
}

export function checkAnswersBackend(questions){
    let test = questions
    return axios.put(`${url}/api/questions`,{test},{headers:{'x-token': t}})
}