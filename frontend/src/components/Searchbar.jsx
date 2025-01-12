import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../context/Shop'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {
const {search,showsearch,setsearch,setshowsearch} = useContext(Shop)
const [visible,setvisible]=useState(false)
const loc= useLocation();

useEffect(()=>{
//console.log(loc.pathname)
if(loc.pathname.includes('collect')){
   setvisible(true)
}else{
    setvisible(false)
}
},[loc])

  return showsearch && visible ?(
    <div className='text-center'>
     <div className='inline-flex items-center justify-center border border-gray-950   px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
         <input value={search} onChange={(e)=>(setsearch(e.target.value))} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='search'/>
        <img className='w-4' src={assets.search_icon}/>
     </div>
       <img onClick={()=>setshowsearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon}/>
    </div>
  ) : null
}

export default Searchbar