import React from 'react'
import { mockComponent } from 'react-dom/test-utils';
import '../../index.css';
import moment from 'moment'

const User = ({ name, email, dateOfBirth }: { name: string, email: string, dateOfBirth: string }) => {

  // const calculateAge = (dateOfBirth: any): number => {
  //   const today = new Date()
  //   const birthDate = new Date(dateOfBirth)
  //   let age = today.getFullYear() - birthDate.getFullYear()
  //   const monthCheck = today.getMonth() - birthDate.getMonth()
  //   if ( monthCheck < 0 || monthCheck === 0 && today.getDay() - birthDate.getDay() ) {
  //     age--
  //   }
  //   return age
  // }

  // Remember to do npm install moment --save
  const calculateAge = (dateOfBirth: any): number => {
    return moment().diff(dateOfBirth, 'years')
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{calculateAge(dateOfBirth)}</td>
    </tr>
  )
}

export default User
