import React, { useState } from 'react'
import errorAlert from './alerts/errorAlert';

function CreateUserForm() {
    const [newUser, setNewUser] = useState({
        name:"",
        email:"",
        cellphone:"",
        level:"",
        schedule:"",
        password:"",
        rol: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        for(const property in newUser){
            if(newUser[property]===""){
                return errorAlert("Todos los datos son necesarios para crear un nuevo usuario")
            }
        }
        // _____________________________ Peticion a Backend ______________________________
        //await createNewUser(newUser)
        //    .then( answer =>{
        //        //console.log(answer.data);
        //        sessionStorage.setItem('t',answer.data.body.token)
        //        sessionStorage.setItem('n',answer.data.body.name)
        //        sessionStorage.setItem('r',answer.data.body.rol)
        //        successAlert(answer.data.message)
        //        //alert(answer.data.message)
        //        //window.location.href='/'
        //        setTimeout(() => {
        //            window.location.href='/'  
        //          }, 2500);
        //    })
        //    .catch( error => {
        //        console.log(error.data);
        //        //alert(error.data.body.message)
        //        errorAlert(error.data.body.message)
        //    })
    }
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div className='bg-transparent text-white card border-white'>
        <form
            onSubmit={handleSubmit}
            className='bg-transparent text-white card-body'
        >
            <div className='input-group'>
                <span htmlFor='name' className='bg-transparent text-white input-group-text'>Nombre</span>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    className='bg-transparent text-white form-control'
                />
            </div>
            
            <div className='bg-transparent text-white input-group'>
                <span htmlFor='email' className='bg-transparent text-white input-group-text'>Email</span>
                <input
                    type='text'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    className='bg-transparent text-white form-control'
                />
            </div>
            
            <div className='bg-transparent text-white input-group'>
                <span htmlFor='cellphone' className='bg-transparent text-white input-group-text'>Phone Number </span>
                <input
                    type='text'
                    id='cellphone'
                    name='cellphone'
                    onChange={handleChange}
                    className='bg-transparent text-white form-control'
                />
            </div>
            <div className='bg-transparent text-white input-group'>
                <span htmlFor='password' className='bg-transparent text-white input-group-text'>Contraseña</span>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    className='bg-transparent text-white form-control'
                />
            </div>
            <div className='bg-transparent text-white input-group'>
                <span htmlFor='level' className='bg-transparent text-white input-group-text'>Curso</span>
                <select 
                    name='level'
                    id='level'
                    onChange={handleChange}
                    className='bg-transparent form-select'
                >
                    <option value="">Elige una opción</option>
                    <option value='Primero'>Primero</option>
                    <option value='Segundo'>Segundo</option>
                    <option value='Tercero'>Tercero</option>
                    <option value='Cuarto'>Cuarto</option>
                    <option value='Quinto'>Quinto</option>
                    <option value='Sexto'>Sexto</option>
                </select>
            </div>
            <div className='bg-transparent text-white input-group'>
                <span htmlFor='schedule' className='bg-transparent text-white input-group-text'>Turno</span>
                    <select
                        name='schedule'
                        id='schedule'
                        onChange={handleChange}
                        className='bg-transparent form-select'
                    >
                        <option value="">Elige una opción</option>
                        <option value='Mañana'>Mañana</option>
                        <option value='Tarde'>Tarde</option>
                    </select>
            </div>
            <div className='text-center'>
                <button className='bg-transparent text-white mt-2 btn btn-secondary'>Guardar Usuario</button>
            </div>
        </form>
    </div>
  )
}

export default CreateUserForm