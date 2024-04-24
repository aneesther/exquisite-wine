import React from 'react'
import "./navcheck.css"

function NavCart() {
  return (
    <div className='check-cart'>
      <div className='nav-cart'>
      <p className='cart-pan'>PanWines</p>
      <div className='hom-carte'>
          <p className='hom-carty'>Home</p>
          <p className='pro-carty'>Products</p>
          <div className='pan-shop-cart'>
              <p className='shop-carty'>Shopping Cart</p>
              <img src=' /images/cart.png' alt='shop' className='shoppy'/>
          </div>
      </div>
      <img  src='/images/humanIcon.png' alt='icon' className='human'/>
    </div> 
    <div  className='check-nav'>
        <div className='ship-tic'>
            <img src='/images/tick.png' id='tic-mg' alt='tick'/>
            <p className='shipment'>Shipping</p>
        </div>
        <div className='pay-tic'>
            <img src='/images/tick.png' id='tic-mg' alt='tick'/> 
            <p className='paying'>Payment</p>
        </div>
        <div className='re-tick'>
            <img src='/images/tick.png' id='tic-mg' alt='tick'/> 
            <p className='reviewing'>Review</p>
        </div>
    </div>
    </div>
    
  )
}

export default NavCart

{/* <div className='sector-nav'>
        
      </div> */}