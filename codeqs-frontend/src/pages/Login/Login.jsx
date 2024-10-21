import './Login.css'
import { useState } from 'react'
import logo from '../../assets/logo.png'

import login from '../../assets/login.png'

const Login = () => {

const [ signState, setSignstate ] = useState('Sign In');


  return (
    <div className='login' style={{ display:'inline'}}>
        
        <div className="login-form">
            <div className="logo-left">
            <img src={logo} alt="" className='logo-img'/>

             <p>Welcome to <br />CODE QS Online <br />Learning Platform</p>
             <img src={login} alt="" className='login-img'/>

            </div>
            <hr />
          <div className="logo-right">
          <h1>{signState}</h1>
          <form >
            {signState === 'Sign Up'?<input type="text" placeholder= ' Name' />
            :<></> }
             <input type="email" placeholder= ' Email'/>
             <input type="password" placeholder= 'Password'/>
             <button>{signState}</button>
               <div className="form-help">
                  <div className="remember">
                    <input type="checkbox" className='chkbx' />
                    <label htmlFor="">Remember Me</label>
                  </div>
                  <p>Need Help?</p>
               </div>
          </form>
          <div className="form-switch">
          {signState === 'Sign In'?
          <p>New to ? <span onClick={()=>{setSignstate('Sign Up')}}>Sign Up Now</span></p>
          : <p>Already have account <span onClick={()=>{setSignstate('Sign In')}}>Sign In Now</span></p>
          }
             

          </div>
          </div>
        </div>
    </div>
  )
}

export default Login