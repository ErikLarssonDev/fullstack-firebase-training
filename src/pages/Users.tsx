import React from 'react'
import UserTable from '../components/userTable/UsersTable'
import '../index.css';

const Users = ( { users }: { users: Array<any> } ) => {
  
 


  return (
    <div  className='container'>
      <UserTable users={users} />
    </div>
  )
}

export default Users;
