import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'



function Navbar() {
  return (
    <div className='login-link' >
      <NavLink to='/Login'>Login </NavLink> / / /
      <NavLink to='/Home'>Home </NavLink>
    </div>
  )
}

export default Navbar
