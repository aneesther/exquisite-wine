import React from 'react'
import "./shopcartA.css"
import { Link } from 'react-router-dom'
import NavCart from '../components/Navbar/NavCart'

function ShopCartA() {
  return (
    <div>
       <NavCart/>
       <div className='main-shop-button'>
       <div className='main-cart'>
         <p className='empty-cart'>Your Shopping Cart is Empty</p>
         <p className='explorance'>Explore our product page to add item(s) to your carts</p>
       </div>
       <div className='shop-button'>
         <Link to={'/searchpage'}>
          <p className='mimi-shop'>Explore Products</p>
         </Link>
       </div>
       </div>
       
    </div>
  )
}

export default ShopCartA
