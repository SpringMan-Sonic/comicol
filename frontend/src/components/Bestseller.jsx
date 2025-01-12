import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Shop } from '../context/Shop'
import Product from './product'

const Bestseller = () => {
    const {products}= useContext(Shop)
    const [bestSeller,setbestseller]=useState([])
    useEffect(()=>{
        const bestProduct= products.filter((item)=>(item.bestSeller))
        setbestseller(bestProduct.slice(0,20))
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
       <Title text1={'Highly'} text2={'Rated'}/>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
       
       </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            bestSeller.map((item,index)=>(
              <Product key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
          }
        </div>
    </div>
  )
}

export default Bestseller