import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'


function Navs() {
  return (
    <div className='login-link' >
      <NavLink to='/Login'>Login </NavLink> / / /
      <NavLink to='/Home'>Home </NavLink>
    </div>
  )
}

export default Navs
