import React from 'react'
import './signup.css'
import NavLog from '../components/Navbar/NavLog'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
        <NavLog/>
        <div className='signup-login'>
            <div className='maidule'>
                <img src='/images/ondule.png' alt='ondule' className='img-pix' />
            </div>
            <div className='sign-up'>
                <div className='main-creation'>
                    <p className='create'>Create Account</p>
                    <div className='fullname-auth'>
                        <div className='fullname'>
                            <p className='name-auth'>Full Name</p>
                            <input type='text' placeholder='placeholder'/>
                        </div>

                        <div className='fullname'>
                            <p className='name-auth'>Email</p>
                            <input type='text' placeholder='placeholder'/>
                        </div>

                        <div className='fullname'>
                            <p className='name-auth'>Phone</p>
                            <input type='text' placeholder='placeholder'/>
                        </div>

                        <div className='fullname'>
                            <p className='name-auth'>Password</p>
                            <input type='text' placeholder='placeholder'/>
                        </div>
                        <Link to={'/login'}>
                        <div className='button-auth'>
                           <p>Sign Up</p>
                        </div>
                        </Link>

                        <div className='gool'>
                            <img src='/images/google.png' alt='google' id='goog'/>
                            <p className='golly'>Sign Up with Google</p>
                        </div>
                    </div>
                    <p className='already'>Already have an account? <a href='login'> Sign In</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
