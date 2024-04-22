import React,{ useState} from 'react'
import './shopcartA.css'
import NavCart from '../components/Navbar/NavCart'

function ShopCartPage() {
  return (
    <div>
      <NavCart/>
      <div className='main-cart-page'>
        <div className='your-cart'>
            <p className='yours'> Your Cart</p>
            <img src='/images/cart.png' alt='Cart' className='cart-page'/>
            <img src='/images/two.png' alt='two' className='two'/>
        </div>
        <div className='prod-list'>
            <p className='prody'>Product</p>
            <div className='pqs'>
                <p className='price-page'>Price</p>
                <p className='quan-page'>Quantity</p>
                <p className='total-page'>Total</p>
            </div>
        </div>
        <div className='second-cart-page'>
            <div className='image-amarone'>
                <img src='/images/small-wine.png' alt='small-wine'  className='small-wine'/>
                <p className='amarone-page'>Amarone: Red wine</p>
            </div>
            <div className='price-pag'>
                    <p className='price-page-box'>$1200</p>
                    <Count/>
                    <p className='price-page-box'>$2400</p>
           </div>
        </div>
        <div className='second-cart-page'>
            <div className='image-amarone'>
                <img src='/images/small-wine.png' alt='small-wine'  className='small-wine'/>
                <p className='amarone-page'>Amarone: Red wine</p>
            </div>
            <div className='price-pag'>
                    <p className='price-page-box'>$1200</p>
                    <Count/>
                    <p className='price-page-box'>$2400</p>
           </div>
        </div>
        <div className='dola'>
            <p className='deli'>Delivery</p>
            <p className='two-dola'>$200</p>
        </div>
        <div className='grandy'>
            <p className='grant'>Grand Total</p>
            <p className='three-six'>$3600</p>
        </div>
        <div className='sub-der'>
            <p className='submit-click'>Submit Order</p>
        </div>
      </div>
    </div>
  )
}

export default ShopCartPage



export  function Count() {
    const [count, setCount] = useState(0)
      
      function decreaseCount() {
        setCount(prevCount => prevCount -1)
      }

      function increaseCount() {
        setCount(prevCount => prevCount +1)
      }



    return(
        <div className='botton-click'>
         <button onClick={decreaseCount}>-</button>
         <button>{count}</button>
         <button onClick={increaseCount}>+</button>
        </div>
    )
}