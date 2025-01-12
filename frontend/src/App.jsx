import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './webs/Home'
import Collect from './webs/Collect'
import About from './webs/About'
import Contact from './webs/Contact'
import Product from './webs/Product'
import Cart from './webs/Cart'
import Login from './webs/Login'
import Order from './webs/Order'
import Orders from './webs/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import Verify from './webs/Verify'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <Navbar />
       <Searchbar/>
      <Routes>
         
         <Route path="/" element={<Home />} />

         <Route path='/collect' element={<Collect/>}/>         
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/product/:productId' element={<Product/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/order' element={<Order/>}/>
         <Route path='/orders' element={<Orders/>} />
         <Route path='/verify' element={<Verify/>}/>

           
           
      </Routes>
      <Footer/>
    </div>
  )
}

export default App