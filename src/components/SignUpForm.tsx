import React from 'react'
import { useState } from 'react'
import '../index.css'
import { IUser } from '../types'

const SignUpForm = ( { addUser }: {addUser: Function} ) => {
    
    const [userData, setUserData] = useState<IUser>({
        name: '',
        email: '',
        dateOfBirth: ''
      })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addUser(userData)
        setUserData({
            name: '',
            email: '',
            dateOfBirth: ''
        })
    }
    
    return (
        <div>
            <form className='container' onSubmit={handleSubmit} >
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' placeholder='Name' value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})}></input>
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='email' placeholder='Email' value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})}></input>
                </div>
                <div className='form-control'>
                    <label>Date of birth</label>
                    <input type='text' placeholder='YYYY-MM-DD' value={userData.dateOfBirth} onChange={(e) => setUserData({...userData, dateOfBirth: e.target.value})}></input>
                </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default SignUpForm
