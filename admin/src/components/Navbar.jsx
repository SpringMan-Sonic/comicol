import React from 'react'
import {assets} from "../adminassets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
        <img className='w-[max(10%,80px)]' src={assets.logo}/>
        <button onClick={()=>setToken("")} className='bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>LogOut</button>
    </div>
  )
}

export default Navbar

