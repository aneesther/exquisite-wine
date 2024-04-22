import React from 'react'
import "./Navcart.css"

function NavCart() {
  return (
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
  )
}

export default NavCart
