import React from 'react'

function LoginForm() {
  return (
    <div className='bg-transparent  border-white card rounded'>
        <form className='bg-danger bg-opacity-75  card-body rounded py-4'>
            <div className='bg-transparent  mb-3'>
                <label className='bg-transparent  form-label text-white' htmlFor='email'>Nombre de Usuario</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    className='form-control'
                />
            </div>
            <div className='bg-transparent  mb-3'>
                <label className='bg-transparent  form-label text-white' htmlFor='password'>Contraseña</label>
                <input
                    className='form-control'
                    type='password'
                    id='password'
                    name='password'
                />
            </div>
            <div className='text-center'>
                <button className='btn btn-dark'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm