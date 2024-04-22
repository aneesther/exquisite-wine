import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/main/Main';
import "./home.css";
import Footer from '../components/footer/Footer';

function Home() {
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
      <Main/>
      <div className='main-arrival'>
          <p className='new-arrival'>New Arrivals</p>
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
          <p className='new-top'> Top Exotics</p>
          <div className='home-flex'>
           {data.slice(8).map((product) => {
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
      <div className='view-box'>
            <p className='view-tag'>View More</p>
            <img src='/images/Frame 42.png' alt='nest' className='nest'/>
          </div>
      <Footer/>
    </div>
  )
}

export default Home


export function ProductCard({image, title, info, price}) {
  return (
    <div className='product-card'>
       <img src={image} alt='wine-bottle' className='wine-drink'/>
       <div className='product-caption'>
         <p className='first-clear'> {title}</p>
         <p className='sec-clear'> {info}</p>
       </div>
       <div className='counter-box'>
         <div className='box-count'> 
           <p className='minus-box'>-</p>
           <p className='hun-box'>100</p>
           <p className='add-box'>+</p>
         </div>
         <div className='price-box'>
           <p className='price-tag'>{price}</p>
         </div>
       </div>
    </div>
  )
}

