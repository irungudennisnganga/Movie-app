import React from 'react'

function Login() {

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <label>First Name
          <input type="text" placeholder='First Name' /> 
        </label>
        <label>Last Name
          <input type="text" placeholder='Last Name' /> 
        </label>
        <label>Email
          <input type="email" placeholder='Email' /> <br />
        </label>
        <input onClick={onSubmit} type="submit"  />
      </form>
    </div>
  )
}

export default Login
