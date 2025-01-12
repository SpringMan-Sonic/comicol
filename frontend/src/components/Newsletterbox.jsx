import React from 'react'

const Newsletterbox = () => {
    const onSubmitHandler =(event)=>{
          event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-white' >Subscribe Now</p>
        <p className='text-white mt-3'></p>
        <form onSubmit={onSubmitHandler} className='flex items-center gap-3 w-full sm:w-1/2 mx-auto my-6  pl-3'>
            <input className='w-full sm:flex-1 outline-none text-white' type='email' placeholder='Enter email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded-full'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Newsletterbox