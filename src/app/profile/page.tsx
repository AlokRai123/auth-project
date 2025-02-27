import React, { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";
function page() {

   const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
   })

   const [button, setButton] = useState(false);
   const router = useRouter();
   const [loading, setLoading] = useState(false);

   const onSignup = async () =>{

    try {

    setLoading(true);
    const response = await axios.post('../api/users/signup',user)
    console.log('Signup success',response.data)
    router.push('/login')
        
    } catch (error : any) {
        console.log('Signup faild')
        toast.error(error.message)
    }

   }

  return (
    <div>

    </div>
  )
}

export default page