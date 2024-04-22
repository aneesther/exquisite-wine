import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./Searchpage.css"
import { ProductCard } from './Home'
import Footer from '../components/footer/Footer'

function SeachPage() {

  const data = [
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/wine2.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
    {
      image:"/images/Image Container.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,400.00"
    },
  ]



  return (
    <div>
      <Navbar/>
      <div className='main-search'>
        <p className='searchy'> Search Results</p>
        <div className='whole'>
          <div className='cat-con'>
            <p>Category</p>
            <img src='/images/Frame 58.png' alt='frame-58' className='framy'/>
          </div>
          <div className='wines-list'>
            <p className='red'>Red Wine</p>
            <p className='white'>White Wine</p>
            <p className='rose'>Rose Wine</p>
            <p className='spark'>Sparkling Wine</p>
            <p className='forte'>Fortified Wine</p>
            <p className='whiky'>Whiskey</p>
            <p className='vodka'>Vodka</p>
            <p className='rum'>Rum</p>
            <p className='gin'>Gin</p>
            <p className='teq'>Tequila</p>
          </div>
          <div className='cat-con'>
            <p>Filter</p>
            <img src='/images/Frame 58.png' alt='frame-58' className='framy'/>
          </div>
        </div>
        <div className='home-flex'>
        {data.map((product) => {
             return(
               <ProductCard 
               image ={product.image}
               title ={product.title}
               info ={product.info}
               price ={product.price}
               />
             )
            })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SeachPage
