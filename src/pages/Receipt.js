import React from 'react'
import './Receipt.css'

function Receipt() {
  return (
    <div className='major'>
       <div className='main-receipt'>
        <div className='receipt-auth'>
            <p className='pan-receipt'>PanWines</p>
            <p className='streceipt'>Street Address</p>
            <p className='streceipt'>City, Country</p>
            <p className='streceipt'>Email</p>
        </div>
           <div className='receipt-info'>
                <p id='medu-tran'>Transaction Details</p>
                <div>
                <p>Payment Method</p>
                <p>Name</p>
                <p>Invoice Number</p>
                <p>Transaction Date</p>
                <p>Transaction Time</p>
                </div>

                <div>
                <p>Credit Card</p>
                <p> Credit Card</p>
                <p> Lawrence Kingsley</p>
                <p> 8/9/2022</p>
                <p>9:05</p>
                </div>
                
            </div>
            
        </div>
        <div></div>
        <div></div>
       </div>
    
  )
}

export default Receipt
