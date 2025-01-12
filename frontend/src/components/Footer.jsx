import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32'></img>
                <p className='w-full md:w-2/3 text-white'></p>
            </div>
            <div>
                <p  className='text-xl font-medium mb-5'>FACTORY</p>
                <ul className='flex flex-col gap-1 text-white'>
                         <li>Home</li>
                         <li>About</li>
                         <li>Privacy Policy</li>
                         <li>Delivery</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Contact us</p>
                <ul className='flex flex-col gap-1 text-white'>
                    <li>7386638449</li>
                    <li>contact@comicol.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr></hr>
            <p className='py-5 text-sm text-center'>Copyright 2024 Comicol.com</p>
        </div>
    </div>
  )
}

export default Footer