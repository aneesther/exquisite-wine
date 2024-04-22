import React from 'react'
import "./Main.css"
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className='main'>
        <div className='hero-content'>
            <div className='taste-box'>
                <p> Tastefulness &</p>
                <p> Elegance of a Best Wine</p>
            </div>
            <div className='browse-box'>
                <p>Browse our collection to find that delectable taste you desire</p>
            </div>
            <Link to={'/searchpage'}>
            <div className='explore-box'>
                <p>Explore Products</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Main
