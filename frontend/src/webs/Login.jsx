import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../context/Shop';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [curentstate,setcurentstate]=useState('Login');
  const {token,setToken,navigate,backendUrl} = useContext(Shop)

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    try {
      if (curentstate === 'Sign Up') {
        const response = await axios.post(backendUrl+'/api/user/register',{name,email,password})
       if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
       }else{
        toast.error(response.data.message)
       }
      }else{
        const response = await axios.post(backendUrl+'/api/user/login',{email,password})
     if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      
     }else{
      toast.error(response.data.message)
     }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }
},[token])
 
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{curentstate}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-700'/>
      </div>
      {curentstate === 'Login'?'':<input onChange={(e)=>setName(e.target.value)} value={name} type='text' className='w-full px-3 py-2 border border-gray-700' placeholder='Enter Name' required/>}
      <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-700' placeholder='Enter email' required/>
      <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-700' placeholder='Enter password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password</p>
        {
          curentstate==='Login'
          ? <p className='cursor-pointer' onClick={()=>setcurentstate('Sign Up')}>Create Account</p>
          : <p className='cursor-pointer' onClick={()=>setcurentstate('Login')}>Login Here </p>
         
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{curentstate === 'Login'? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login