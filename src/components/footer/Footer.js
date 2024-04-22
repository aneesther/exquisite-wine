import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='main-foot'>
        <div className='pan-head'>
            <div className='panwines'>
               <p>PanWines</p>
            </div>
            <div className='luxury'>
              <p>Homes for luxury wines and</p>
              <p>liquors for that special</p>
              <p>celebration</p>
            </div>
        </div>
        <div className='home-con'>
            <div className='homepage'>
                <div className='hommy'>
                    <p className='hp'>Homepage</p>
                </div>
                <div className='auth'>
                    <p>Home</p>
                    <p>Authentication</p>
                    <p>Products</p>
                    <p>Shopping</p>
                </div>
            </div>
            <div className='contact'>
                <div className='con-tact'>
                    <p className='conny'>Contact Us</p>
                </div>
                <div className='info-con'>
                    <p>info@panwine.co</p>
                    <p>https://panwine.com</p>
                    <p>+234 812 345 6789</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
