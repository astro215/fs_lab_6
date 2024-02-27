import React from 'react'
import '../css/Signup.css'

function Signup() {
    return (
        <div className='body'>
            <form className='signup'>
                <label for='label'>User Id</label>
                <input type='text' id='userid' name='userid' ></input>
               
                <label for='label'>Password</label>
                <input type='text' id='password' name='password' ></input>
             

                <label for='label'>Confirm Password</label>
                <input type='text' id='cpassword' name='cpassword' ></input>

                <label for='label'>Name</label>
                <input type='text' id='name' name='name' ></input>

                <label for='label'>Email</label>
                <input type='text' id='email' name='email' ></input>

                <label for='label'>Country</label>
                <select id='country' name='country'>
                    <option value='Bangladesh'>Bangladesh</option>
                    <option value='India'>India</option>
                    <option value='Pakistan'>Pakistan</option>
                    <option value='Sri Lanka'>Sri Lanka</option>
                </select>

                <input type='submit' value='Sign Up'></input>

            
            </form>
    
        
        </div>
    )
}

export default Signup