import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img  className='w-full md:max-w-[450px] ' src={assets.about_img}/>
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-white'>
           <p>At COMICOL, we celebrate the vibrant world of comics in all its forms. Founded in 2024, our mission is to connect comic enthusiasts, creators, and fans from all walks of life. Whether you’re a lifelong collector, a casual reader, or an aspiring artist, there’s something here for you!</p>
           <p>Our platform features a diverse array of comics, from beloved classics to the latest indie gems. We believe in the power of storytelling through art, and we’re dedicated to showcasing talent from around the globe. Our team is passionate about highlighting emerging creators, promoting diverse voices, and keeping you updated on the latest trends and releases in the comic world.</p>
           <p>What can you find here? Explore our extensive library of comics, engaging articles, and in-depth reviews. Join our community to discuss your favorite series, share your own creations, and connect with fellow comic lovers.</p>
           <p>At COMICOL, we’re not just about comics; we’re about building a community. Your feedback and participation are essential to us. We invite you to engage, share, and immerse yourself in the stories that inspire us all.</p>
           </div>
      </div>
     <div className='mt-18'>
     <  Newsletterbox/>
     </div>
     
    </div>
  )
}

export default About