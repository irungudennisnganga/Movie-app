import React from 'react'

function Login() {

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <label>First Name
          <input 
            type="text" 
            placeholder='First Name' 
            required 
          /> 
        </label>
        <label>Last Name
          <input 
            type="text" 
            placeholder='Last Name'
            required 
          /> 
        </label>
        <label>Email
          <input 
            type="email" 
            placeholder='Email' 
            required
          /> <br />
        </label>
        <input onClick={onSubmit} type="submit"  />
      </form>
    </div>
  )
}

export default Login
