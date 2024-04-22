import React from 'react'
import './Login.css'
import NavLog from '../components/Navbar/NavLog'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <NavLog/>
        <div className='main-login'>
            <div className='main-ondule'>
                <img src='/images/ondule.png' alt='ondule' className='pic-wine' />
            </div>
            <div className='panny'>
              <div className='sign-page-pan'>
                <p className='sign-auth'>Sign in to PanWines</p>
                <div className='mail-con'>
                  <div className='mail-e'>
                    <p className='label-mail'>Email</p>
                    <input type='text'  placeholder='placeholder'/>
                  </div>
                  <div className='mail-e'>
                    <p className='label-mail'>Password</p>
                    <input type='text'  placeholder='placeholder'/>
                  </div>
                  <Link to={"/signup"}>
                     <div className='button-auth'>
                        <p>Sign In</p>
                     </div>
                  </Link>
                </div>
                <p className='forgot-button'>Forgot Password</p>
                <p className='no-acct'>Don't have an account? <a href='signup'>Sign Up</a></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login
