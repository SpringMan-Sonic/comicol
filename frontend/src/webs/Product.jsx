import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shop } from '../context/Shop';
import { assets } from '../assets/frontend_assets/assets';
import Relatedproducts from '../components/Relatedproducts';

const Product = () => {
  const {productId} = useParams();
  const {products,currency,addtocart} = useContext(Shop);
  const [productdata,setproductdata]=useState(false)
  const [image,setimage]=useState('')
  const [size,setsize] = useState('')
  const fetchdata = async()=>{

  products.map((item)=>{
    if(item._id === productId){
      setproductdata(item)
      setimage(item.image[0])
      return null;
    }
  })

  }

  useEffect(()=>{
    fetchdata()
  },[productId,products])
  return productdata?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='w-full sm:w-[80%]'>
            <img className='w-[80%] h-[80%]' src={image}/>
          </div>
        </div>

        <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                 <img src={assets.star_dull_icon}alt="" className="w-3 5" />
                  <p className='ll-2'>(150)</p>
                </div>
                <p className='mt-5 text-10xl font-medium'>{currency}{productdata.price}</p>
                <p className='mt-5 text-white md:w-4/5'>{productdata.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                  <div className='flex gap-2'>
                    {productdata.sizes.map((item,index)=>(
                      <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-black ${item==size? 'bg-red-500':""}`} key={index}>{item}</button>
                    ))}
                  </div>
                </div>
         <button onClick={()=>addtocart(productdata._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>SHIFT TO CART</button>
         <hr className='mt-8 sn:w-4/5'></hr>
         <div className='text-sm text-white mt-5 flex flex-col gap-1'>
          <p>Original Product</p>
          <p>Cash on Delivery available</p>
          <p>Exchange and Return Policy is available</p>
         </div>
        </div>
      </div>
      <div className='mt-20'>
           <div className='flex'>
                       <b className='border px-5 py-3 text-sm'>Description</b>
                       <b className='border px-5 py-3 text-sm'>Reviews (150)</b>
           </div>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-white'>
        <p>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
      </div>
      <Relatedproducts category={productdata.category}></Relatedproducts>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product