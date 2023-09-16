import React from 'react'
import LoginForm from '../components/LoginForm'

function HomePage() {
  return (
  <div className=''>
    <div className='mx-auto my-2' style={{"maxWidth":"400px"}}>
      <LoginForm rol={"student"}/>
    </div>
  </div>  
  )
}

export default HomePage