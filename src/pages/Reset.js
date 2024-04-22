import React from 'react'
import './reset.css'
import NavLog from '../components/Navbar/NavLog'

function Reset() {
  return (
    <div>
      <NavLog/>
      <div className='mainagin'>
            <div className='mainule'>
                <img src='/images/ondule.png' alt='ondule' className='picky-wine' />
            </div>
            <div className='lopan'>
              <div className='paggy-pan'>
                <p className='classy-pass'>Reset Password</p>
                <div className='email-reset-con'>
                  <div className='permail'>
                    <p className='mail-set-con'>Email</p>
                    <input type='text' placeholder='Placeholder'/>
                  </div>

                  <div className='permail'>
                    <p className='mail-set-con'>Phone</p>
                    <input type='text' placeholder='Placeholder'/>
                  </div>

                  <div className='reset-button'>
                    <p>Submit</p>
                  </div>
                </div>
                <p className='alset'>Already have an account? <a href='login'> Sign In</a></p> 
              </div>
            </div>
        </div>     
    </div>
  )
}

export default Reset
