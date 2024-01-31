import React from 'react'
import { useState } from 'react'
import './Form.css'
import { adddata } from './Redux/Reducer'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




export const Form = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const Data = useSelector((state) => state.login.data)
  const [data,setData]=useState('')
  

  const changedata=(event)=>{
    setData({...data,[event.target.name]:event.target.value}
      )}


    const submitdata=(event)=>{
    event.preventDefault()
    dispatch(adddata(data))
   
    navigate('/login')
    alert("registration success")
  
 }

  console.log(data);

  return (
  <div className='box'>
    <div className='container' >
    firstName
    <input className='input' type="text"  onChange={changedata} name='firstname' value={data.firstname ? data.firstname: ''} placeholder='FirstName' /> <br />
    LastName
    <input   className='input' type="text" onChange={changedata} name='lastname' value={data.lastname ? data.lastname : ''} placeholder='LastName' /> <br />
    UserName 
    <input type="text"  className='input'  onChange={changedata}name='username' value={data.username ? data.username : ''}  placeholder='UserName' /> <br />
    Password 
     <input type="password"  className='input' onChange={changedata}name='password' value={data.password ? data.password : ''}  placeholder='Password' /> <br />
    UserType
    <select name="usertype" className='input'  id=""  onChange={changedata}>
     <option value="admin">Admin</option> 
     <option value="admin">Admin</option>
     <option value="teacher"> Teacher</option>

     <option value="student"> Student</option>
    </select> <br />

    <button className='button' type='submit' onClick={submitdata}>Submit</button>
</div>
</div>
    
  )
}
export default Form
