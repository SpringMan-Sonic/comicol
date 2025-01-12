import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-black'>Our Details!!!!</p>
          <p className='text-white'>544678 hallowens <br/> Washington DC</p>
          <p className='text-white'>Mobile: 123456789 <br/> Email: comicol@2024gmail.com</p>
          <p className='font-semibold text-xl text-black'>Jobs Needed</p>
          <p className='text-white'>Learn more About Us</p>
          <button className='border-l-4 border-black px-8 py-4 text-sm hover:bg-black hover:text-white rounded-full'>Explore Us</button>
        </div>
      </div>
      <Newsletterbox/>

    </div>
    
  )
}

export default Contact