import axios from 'axios'

//const url = 'https://learn-english-backend-bay.vercel.app';
const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function getExamsBackend(idClasses){
    return axios.get(`${url}/api/tests`)
}

export function getQuestions(idTest){
    return axios.get(`${url}/api/questions?test=${idTest}`)
}