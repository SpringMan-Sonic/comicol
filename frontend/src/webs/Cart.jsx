import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../context/Shop'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Carttotal from '../components/Carttotal'

const Cart = () => {

const {products,currency,cartItems,updatequantity,navigate}=useContext(Shop)

const [cartData,setcartdata]=useState([])

useEffect(()=>{
  
  if(products.length > 0){
    const temp=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] >0){
          temp.push({
            _id : items,
            size : item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setcartdata(temp);
  }

},[cartItems,products])


  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'MY'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productdata=products.find((product)=> product._id===item._id)

            return(
              <div key={index} className='py-4 border-t border-b text-white grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>

                      <div className='flex items-start gap-6'>
                         <img className='w-16 sm:w-20' src={productdata.image[0]}></img>
                         <div>
                          <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                          <div className='flex items-center gap-5 mt-2'>
                            <p>{currency}{productdata.price}</p>
                            <p className='px-2 sm:px-3 sm:py-1 border-red-600 bg-red'>{item.size}</p>
                          </div>
                         </div>
                      </div>
                      
                      <input onChange={(e)=>e.target.value === '' || e.target.value==='0' ? null : updatequantity(item._id,item.size,Number(e.target.value))} className='border-black bg-red-950 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded' type='number' min={1} defaultValue={item.quantity}/>
                     <img onClick={()=>updatequantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 sm:w-5 mr-4 cursor-pointer'/>
              
              </div>
            )
          })
        }
      </div>
      <div className='flex my-20 justify-end'>
        <div className='w-full sm:w-[450px]'>
          <Carttotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/order')} className='bg-black text-white text-sm my-8 px-8 py-3'>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart