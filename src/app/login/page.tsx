'use client'
import React, { useState } from 'react'
import axios from 'axios'

function page() {

    const [user,setUser] = useState({
        email : "",
        password : ""
    })
    const [loading, setLoading] = useState(false);



  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "Processing": "Login"}</h1> <br />

      <label htmlFor="email">User Email Id :</label>
      <input
      type="text"
      id='email'
      value={user.email}
      className='border border-black bg-gray-200 rounded-xl'
      onChange={(e) => setUser({...user, email: e.target.value})}
      />
     <label htmlFor="password">User password :</label>
      <input
      type="text"
      id='password'
      value={user.password}
       className='border border-black bg-gray-200 rounded-xl'
      onChange={(e) => setUser({...user, email: e.target.value})}
      />

      <button className='border border-black bg-gray-200 p-2 rounded '>login -</button>


    </div>
  )
}

export default page