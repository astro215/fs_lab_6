import React from 'react'
import '../css/Login.css'

function Login() {
  return (
    <div className='body'>
        <form className='form'>
            <label for='label'>User Id</label>
            <input type='text' id='userid' name='userid' placeholder='Enter User Id'></input>
            <br></br>
            <label for='label'>Password</label>
            <input type='text' id='password' name='password' placeholder='Enter Password'></input>

            <br></br>
            <input type='submit' value='Log In'></input>

        

        </form>

      
    </div>
  )
}

export default Login
