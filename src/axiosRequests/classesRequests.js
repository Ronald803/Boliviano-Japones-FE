import axios from 'axios'

const t = localStorage.getItem('t')
//const url = 'https://learn-english-backend-bay.vercel.app';
const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function getClassesBackend(){
    return axios.get(`${url}/api/classes/all`,{headers:{'x-token': t}})
}

export function getSpecificClassBackend(){
    const idClasses = localStorage.getItem('idClasses')
    return axios.get(`${url}/api/classes/${idClasses}`,{headers:{'x-token': t}})
}