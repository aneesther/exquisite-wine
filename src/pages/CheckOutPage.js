import React from 'react'
import "./checkout.css"
import NavCheck from "../components/Navbar/NavCheck"
import { Link } from 'react-router-dom'

function CheckOutPage() {
  return (
    <div >
      <NavCheck/>
      <div className='outpage-main'>
        <div className='smal-writeup'>
          <img src='/images/Vector@2x.png' className='bigg-tic' alt='biggy'/>
          <p className='trans'>Transaction Successful</p>
          <div className='col-pay'>
            <p>Your Payment has been received and you will get notifications for</p>
            <p>your order's progress</p>
          </div>
        </div>
        <div className='double-bt'>
            <div className='firstcheck-button'>
              <p className='print-rec'>Print Receipt</p>
            </div>

            <Link to={"/"}>
                <div className='secondcheck-button'>
                  <p className='go-rec'>Go Back To Home</p>
                </div>
            </Link>
            
        </div>
      </div>
    </div>
  )
}

export default CheckOutPage
