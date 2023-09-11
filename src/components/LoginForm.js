import React, { useState } from 'react'
import errorAlert from './alerts/errorAlert';
import { loginStudent } from '../axiosRequests/studentsRequests';
import successAlert from './alerts/successAler';

function LoginForm() {
    const [student, setStudent] = useState({
        name: "",
        password: ""
    });
    const handleSubmit = async(e)=>{
        e.preventDefault();
        for(const property in student){
            if(student[property]===""){
                return errorAlert("Todos los datos son necesarios para iniciar sesión")
            }
        }
        loginStudent(student)
            .then(answer=>{
                console.log(answer.data);
                localStorage.setItem('t',answer.data.token);
                localStorage.setItem('n',answer.data.name);
                localStorage.setItem('r',"student");
                localStorage.setItem('c',answer.data.classes);
                successAlert("Bienvenido");
                setTimeout(() => {
                    window.location.href='/test'  
                }, 2500);
            })
            .catch(e=>{
                console.log(e);
            })
    }
    const handleChange = (e)=>{
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='bg-transparent  border-white card rounded'>
        <form onSubmit={handleSubmit} className='bg-danger bg-opacity-75  card-body rounded py-4'>
            <div className='py-2'>
                <div className='bg-transparent  mb-3'>
                    <label className='bg-transparent  form-label text-white' htmlFor='name'>Nombre de Estudiante</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='bg-transparent  mb-3'>
                    <label className='bg-transparent  form-label text-white' htmlFor='password'>Contraseña</label>
                    <input
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <div className='text-center'>
                    <button className='btn btn-dark'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm