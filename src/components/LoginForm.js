import React from 'react'

function LoginForm() {
  return (
    <div className='bg-transparent text-white border-white card'>
        <form className='bg-transparent text-white card-body'>
            <div className='bg-transparent text-white mb-3'>
                <label className='bg-transparent text-white form-label' htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    className='bg-transparent text-white form-control'

                />
            </div>
            <div className='bg-transparent text-white mb-3'>
                <label className='bg-transparent text-white form-label' htmlFor='password'>Password</label>
                <input
                    className='bg-transparent text-white form-control'
                    type='password'
                    id='password'
                    name='password'
                />
            </div>
            <button className=' text-white btn btn-success'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm