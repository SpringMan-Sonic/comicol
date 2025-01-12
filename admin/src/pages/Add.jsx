import React, { useState } from 'react'
import { assets } from '../adminassets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {
  const [image1,setImage1] = useState(false)
  const [name,setName]= useState('')
  const[description,setDescription]=useState('')
  const [price,setPrice] = useState('')
  const [Category,setCategory] = useState("Comics")
  const [sizes,setSizes]= useState([])
  const [bestSeller,setBestseller]=useState(false)

  const onSubmitHandler = async (e)=>{
   e.preventDefault();
   try {
     const formData = new FormData()

     formData.append("name",name)
     formData.append("description",description)
     formData.append("price",price)
     formData.append("Category",Category)
     formData.append("bestSeller",bestSeller)
     formData.append("sizes",JSON.stringify(sizes))
     formData.append("image1",image1)

     const response = await axios.post(backendUrl+'/api/product/add',formData,{headers:{token}})

     if(response.data.success){
             
      toast.success(response.data.message)
      setName('')
      setDescription('')
      setImage1(false)
      setPrice('')
     }else{
      toast.error(response.data.message)
     }
   } catch (error) {
    console.log(error.message)
    toast.error(error.message)
   }

  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2 text-2xl'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img className='' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}></img>
            <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id="image1" hidden/>
          </label>

        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Name of product' required/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Content please' required/>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} value={Category} className='w-full px-3 py-2'>
            <option value="Comics">Comics</option>
            <option value="Toys">Toys</option>
            <option value="Adult Costumes">Adult Costumes</option>
            <option value="Kids Costumes">Kids Costumes</option>
            <option value="Masks & Gadgets">Masks & Gadgets</option>


          </select>
        </div>
        <div>
          <p className=' mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='4' />
        </div>
      </div>
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>
            <p  className={`${sizes.includes("S") ? "bg-black" : "bg-red"} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
            <p className={`${sizes.includes("M") ? "bg-black" : "bg-red"} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
            <p className={`${sizes.includes("L") ? "bg-black" : "bg-red"} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-black" : "bg-red"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-black" : "bg-red"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)} checked={bestSeller} type='checkbox' id='bestseller'/>
       <label className='cursor-pointer text-xl' htmlFor='bestseller'>
         Add To BestSeller
       </label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white rounded-full'>ADD</button>
    </form>
  )
}

export default Add