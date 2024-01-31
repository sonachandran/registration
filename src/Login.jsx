import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import Button from 'react-bootstrap/Button';

export const Login = () => {
   const [data,setData]=useState('')
   const navigate=useNavigate()
   const formdata= useSelector((state) => state.login.data)
  
  

   const changedata=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
   }
   console.log(data);

   const submitdata=()=>{
    
     if (data.username && data.password)
     {
      if(data.username===formdata.username && data.password===formdata.password)
      {
        if(formdata.usertype==='teacher')
         {
          navigate('/Teacher')
         }
         else if(formdata.usertype==='admin')
         {
          navigate('/Admin')
         }
         else if(formdata.usertype==='student')
         {
          navigate('/Student')
         }
        

       }
     else{
      toast.error('invalid user');
     }
   }
  }
    return (
    <>
   <div className='container2 border '>
    <div style={{marginTop:'80px'}}>
    UserName <br />
    <input className='input' type="text" name='username'onChange={changedata} /><br />
    Password <br />
    <input  className='input'  type="password" name='password' onChange={changedata} /> <br />
  
    <button className='button'  onClick={submitdata} type='submit'>Sign In</button>
    
    </div>
    </div>
    <ToastContainer/>
      
    </>
   
      
  )

    }
