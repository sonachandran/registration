import React from 'react'
import { useSelector } from 'react-redux'
import'./Student.css'
const Admin = () => {
  const adminDetails=useSelector((state)=>state.login.data)
  return (
    <div className='container'>
    <h1 className='heading'>Admin Details!</h1>
    <div className='element'>
      <p>FirstName:{adminDetails.firstname}</p>
      <p>LastName:{adminDetails.lastname}</p>
      <p>UserName:{adminDetails.username}</p>
      <p>Password:{adminDetails.password}</p>
      </div>
    </div>
  )
}

export default Admin