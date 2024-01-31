import React from 'react'
import { useSelector } from 'react-redux'
import './Student.css'

const Student = () => {
  const studentDetails=useSelector((state)=>state.login.data)
  return (
    <div className='container'>
    <h1 className='heading'>Student Details!</h1>
    <div className='element'>
      <p>FirstName:{studentDetails.firstname}</p>
      <p>LastName:{studentDetails.lastname}</p>
      <p>UserName:{studentDetails.username}</p>
      <p>Password:{studentDetails.password}</p>
      </div>
    </div>
  )
}

export default Student