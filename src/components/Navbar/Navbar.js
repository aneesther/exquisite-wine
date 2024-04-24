import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='Navbar'>
       <div className='top-navbar'>
          <p className='nav-home'>Home</p>
          <p className='nav-product'>Products</p>
          <p className='nav-support'>Support</p>
       </div>
       <div className='bottom-navbar'>
          <div className='pan-nav'>
            <p>PanWines</p>
          </div>
          <div className='search-button'>
             <input type='search' id='nav-input' placeholder='search' />
          </div>
          <div className='nav-last'>
            <div className='cart-nav'>
               <img src='/images/cart.png' alt='cart' className='cart'/>
            </div>
            <div className='button-nav'>
               <Link to={"/login"}>
                  <div className='first-nav'>
                    <p>Login</p>
                  </div>
               </Link>

               <Link to={"signup"}>
                    <div className='sec-nav'>
                      <p>Sign Up</p>
                    </div>
               </Link>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar
