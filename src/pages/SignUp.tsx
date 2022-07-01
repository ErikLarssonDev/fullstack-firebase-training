import React from 'react'
import '../index.css'
import SignUpForm from '../components/SignUpForm'

const SignUp = ({ addUser}: {addUser: Function}) => {
  return (
    <div>
      <SignUpForm addUser={addUser} />
    </div>
  )
}

export default SignUp
