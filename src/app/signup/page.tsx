'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function page() {
    const router = useRouter();
  
    const [user,setUser] = useState({
        username : "",
        email : "",
        password : ""
    })
    const [buttonDisabled,setButtonDisabled] = useState(false);

    const [loading , setLoading] = useState(false)

    const onSignup = async () => {
        try {

        setLoading(true);
        const response = await axios.post("/api/users/signup",user)

        console.log("Signup Succes",response.data)
        router.push('/login')

        } catch (error : any) {
           console.log("Signup failed")
           toast.error(error.message);
        }
    }
    useEffect(() =>{

      if(user.email.length > 0 && user.password.length> 0 && user.username.length > 0){
          setButtonDisabled(false);
      }else{
          setButtonDisabled(true);
      }

  },[user])

return (
  <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "Processing" : "Signup"}</h1> <hr />

      <label htmlFor="username">username:</label>
      <input
      id='username'
      value={user.username}
      onChange={(e) => setUser({...user, username : e.target.value})}
      placeholder='enter username'
      className='border border-black p-1 bg-gray-200 rounded-xl '
      type="text"
      />
       <label htmlFor="email">Email:</label>
      <input
      id='email'
      value={user.email}
      onChange={(e) => setUser({...user, email : e.target.value})}
      placeholder='enter email'
      className='border border-black p-1 bg-gray-200 rounded-xl '
      type="text"
      />
       <label htmlFor="password">Password:</label>
        <input
        id='password'
        value={user.password}
        onChange={(e) => setUser({...user, password : e.target.value})}
        placeholder='enter password'
        className='border border-black p-1 bg-gray-200 rounded-xl mb-3'
        type="text"
        />

        <button
        onClick={onSignup}
        className='p-2 border border-black rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        >
            {buttonDisabled ? "No Signup" : " Signup"}
        </button>

        <Link href = {'/login'}>Visit login page</Link>

    </div>
  )
}

