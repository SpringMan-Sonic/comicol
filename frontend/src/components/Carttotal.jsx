import React, { useContext } from 'react'
import { Shop } from '../context/Shop'
import Title from './Title'

const Carttotal = () => {

    const {currency,del_fee,getcartamount}=useContext(Shop)

  return (
    <div className='w-full'>
         <div className='text-2xl'>
            <Title text1={'Cart'} text2={'Amount'}/>
         </div>
         <div className='flex flex-col gap-2 mt-2 text-sm'>
             <div className='flex justify-between'>
                       <p>Item Total</p>
                       <p>{currency} {getcartamount()}.00</p>
             </div>
             <hr/>
             <div className='flex justify-between'>
                <p>Shipping Amount</p>
                <p>{currency} {del_fee}.00</p>
             </div>
             <hr/>
             <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getcartamount() === 0 ? 0 : getcartamount() + del_fee }.00</b>

             </div>
         </div>
    </div>
  )
}

export default Carttotal