import React, { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { Shop } from '../context/Shop'

const Navbar = () => {
  const [visible,setVisible]=useState(false)


         const {setshowsearch,getcartcount,navigate,token,setToken,setcartitems} = useContext(Shop)
         const logout = ()=>{
          navigate('/login')
          localStorage.removeItem('token')
          setToken('')
          setcartitems({})
         
         }
  return (
    <div className='flex items-center justify-between py-5 font-medium'> 

      <Link to='/'><img src={assets.logo} className='w-36' alt=''/></Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
           <NavLink to='/' className='flex flex-col items-center gap-1 '>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
           <NavLink to='/collect' className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
           <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
           <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
            <p>Contact us</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
          <img  onClick={()=>setshowsearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' />
          <div className='group relative'>
         <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' /> 

          {token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={()=> navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>LogOut</p>
            </div>
          </div>}
          </div>
          <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5'></img>
          <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getcartcount()}</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
        </div>

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
              <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <img className='h-4 rotate-180' src={assets.dropdown_icon}/>
                <p>Back</p>
              </div>
              <NavLink onClick={()=>setVisible(false)}  className="py-2 pl-6 border" to='/'>Home</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/collect'>Collection</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/about'>About</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/contact'>Contact</NavLink>
            </div>

        </div>
    </div>
  )
}

export default Navbar