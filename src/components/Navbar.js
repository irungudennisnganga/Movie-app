import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


function Navs() {
  return (
    <div className='login-link' >
      <NavLink to='/Login'>Login </NavLink> / / /
      <NavLink to='/Home'>Home </NavLink> / / /
      <NavLink to="/MyMovies">My Movies</NavLink> / / /
      <NavLink to='/AddMovies'>Add Movies</NavLink>
    </div>
  )
}

export default Navs
