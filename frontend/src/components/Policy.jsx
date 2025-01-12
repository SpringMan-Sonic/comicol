import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-white'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5'/>   
            <p className='font-semibold'>Exchange Policy Exists</p>
            <p className='text-white'></p>
                </div>
                <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5'/>   
            <p className='font-semibold'>Return avail for 4 Days</p>
            <p className='text-white'></p>
                </div>
                <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5'/>   
            <p className='font-semibold'>Customer Support (24/7)</p>
            <p className='text-white'></p>
                </div>
    </div>
  )
}

export default Policy