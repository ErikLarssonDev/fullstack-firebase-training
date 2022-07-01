import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { app, database } from './firebaseConfig'
import { addDoc, collection, getDocs, query } from 'firebase/firestore'
import { IUser } from './types'
import { useEffect, useState } from 'react'

import './index.css';
import SignUp from './pages/SignUp';
import Users from './pages/Users';

function App() {
  const collectionRef = collection(database, 'users')
  const [users, setUsers]:any[] = useState([])
  
  // TODO Move to a user.ts file in /firebase/firestore/functions
  const addUser = (user: IUser) => {
    addDoc(collectionRef, {
      name: user.name,
      email: user.email,
      dateOfBirth: user.dateOfBirth
    })
      .then(() => {
        console.log("User added")
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  // TODO Move to a user.ts file in /firebase/firestore/functions
  const getUsers = async ()  => {
    const data = await getDocs(collectionRef)
    setUsers(data.docs.map((item) => {
      return { ...item.data(), id: item.id }
    }))
    console.log(users)
  }

  useEffect(() => {
      getUsers()
  }, [])

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/sign-up' element={<SignUp addUser={addUser} />}/>
          <Route path='/users' element={<Users users={users} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
