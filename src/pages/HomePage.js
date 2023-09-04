import React from 'react'
import LoginForm from '../components/LoginForm'

function HomePage() {
  return (
  <div>
    <div className='mx-auto my-2' style={{"maxWidth":"400px"}}>
      <LoginForm/>
    </div>
  </div>  
  )
}

export default HomePage