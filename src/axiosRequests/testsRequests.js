import axios from 'axios'

const t = localStorage.getItem('t')
//const url = 'https://learn-english-backend-bay.vercel.app';
const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function getExamsBackend(idClasses){
    console.log(t);
    return axios.get(`${url}/api/tests/s`,{headers:{'x-token': t}})
}

export function getQuestions(idTest){
    return axios.get(`${url}/api/questions?test=${idTest}`)
}