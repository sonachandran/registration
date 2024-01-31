import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<div className='nav'>
    <h1>Navbar</h1>
    
  <div className='elements'>
    
    <Link to='./form'className='line'>Register</Link>
    <Link to='./login' className='line'>Login</Link>
    
   
    </div>
 </div>
 <Outlet/>
    </>
  )
}

export default Navbar

