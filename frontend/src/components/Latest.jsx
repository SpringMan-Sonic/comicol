import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../context/Shop'
import Title from './Title';
import Product from './product';

const Latest = () => {
    const {products}= useContext(Shop);
    const [latestproducts,setlatestproducts]=useState([])

    useEffect(()=>{
      setlatestproducts(products.slice(0,8));
    },[products])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'Comic'} text2={'Books'}/>
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
           </p>
      </div>
       
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestproducts.map((item,index)=>(
            <Product key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
       </div>
    </div>
  )
}

export default Latest