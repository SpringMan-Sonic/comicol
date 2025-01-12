import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Shop } from '../context/Shop'
import Product from './product'
import Title from './Title'
const Relatedproducts = ({category}) => {
    const {products}= useContext(Shop)
    const [related,setrelated] =useState([])

    useEffect(()=>{
          if(products.length >0 && category){
            let copyproduct=products.slice();

            copyproduct =copyproduct.filter((item)=> category === item.category);
            console.log(copyproduct.slice(0,5))
            setrelated(copyproduct.slice(0,5))

          }
    },[products,category])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-d'>
            <Title text1={'Related'} text2={'Items'}></Title>
        </div>
        <div className='grid grid-cols-2 sm:grid-colss-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y'>
            {
            related.map((item,index)=>(
                <Product  key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>
    </div>
  )
}

export default Relatedproducts