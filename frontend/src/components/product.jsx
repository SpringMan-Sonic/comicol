import React, { useContext } from 'react'
import { Shop } from '../context/Shop'
import { Link } from 'react-router-dom'

const Product = ({id,image,name,price}) => {

    const {currency}=useContext(Shop)
  return (
    <Link to={`/product/${id}`} className='text-gray-500 cursor-pointer' >
        <div className='overflow-hidden'>
              <img className='hover:scale-110 translate ease-in-out' src={image[0]} />
        </div>
     <p className='pt-3 pb-1 text-sm'>{name}</p>
     <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default Product