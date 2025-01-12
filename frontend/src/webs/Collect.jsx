import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../context/Shop'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import Product from '../components/product'
import '../index.css'

const Collect = () => {
  const {products,search,showsearch }= useContext(Shop)
  const [showFilter,setshowfilter]=useState(false)
  const [filterProducts,setfilterproducts]= useState([])
  const [Category,setcategory]=useState([])
  const [sorting,setsorting]=useState('relevant')
   const toggle = (e)=>{
 if(Category.includes(e.target.value)){
  setcategory(prev=> prev.filter(item=>item!== e.target.value))
 }else{
  setcategory(prev=>[...prev,e.target.value])
 }
   }
 
   const apply=()=>{

    let copy= products.slice();

    if(showsearch && search){
      if (typeof search === 'string') {
        copy = copy.filter(item => 
            item.name && item.name.toLowerCase().includes(search.toLowerCase())
        );
            
    }}

    if(Category.length >0){
      copy= copy.filter(item=> Category.includes(item.Category))
    }
    setfilterproducts(copy)
   }

  const sortproduct=()=>{

    let fp= filterProducts.slice();

    switch(sorting){
      case 'low-high':
        setfilterproducts(fp.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
          setfilterproducts(fp.sort((a,b)=>(b.price-a.price)));
         break;

      default:
        apply();
        break;
      }
  }


 useEffect(()=>{
  apply()
 },[Category,search,showsearch,products])

 useEffect(()=>{
  sortproduct()
 },[sorting])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={()=>setshowfilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>CHOOSE
          <img className={`h-3 sm:hidden ${showFilter? "rotate-90": ''}`} src={assets.dropdown_icon}/>
        </p>

        <div className={`border border-white pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-white'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Comics'} onChange={toggle} />Comics
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Toys'} onChange={toggle} />Toys
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Adult Costumes'} onChange={toggle}/>Adult Costumes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids Costumes'} onChange={toggle}/>Kids Costumes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Masks & Gadgets'}onChange={toggle} />Masks & Gadgets
            </p>
          </div>
        </div>
        </div>

        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'Our'} text2={'Collection'}/>
           <select onChange={(e)=>{setsorting(e.target.value)}} className='border-2 border-white text-sm px-2'>
            <option value="relevant">Sort by:relevant</option>
            <option value="low-high">Sort by:low-high</option>
            <option value="high-low">Sort by:high-low</option>
           </select>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
           {
            filterProducts.map((item,index)=>(
                    <Product key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
           }

          </div>
        </div>

    </div>
  )
}

export default Collect
