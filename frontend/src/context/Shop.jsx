import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';



export const Shop = createContext();

const Shopcontextprovider=(props)=>{

    const currency = 'Rs.';
    const del_fee = 10;
   const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search,setsearch] = useState([]);
    const [showsearch,setshowsearch]= useState(false);
    const [cartItems,setcartitems]=useState({});
    const [products,setProducts]= useState([]);
    const [token,setToken]=useState('')

    const navigate= useNavigate();
   
    const addtocart= async(itemId,size)=>{
            let cartData= structuredClone(cartItems)

            if(cartData[itemId]){
                     if(cartData[itemId][size]){
                        cartData[itemId][size]+=1;

                     }else{
                        cartData[itemId][size]=1;
                     }
            }else{
               cartData[itemId]={};
               cartData[itemId][size]=1;
            }

            setcartitems(cartData);


            if (token) {
               try {
                  await axios.post(backendUrl+'/api/cart/add',{itemId,size},{headers:{token}})
               } catch (error) {
                  console.log(error);
                  toast.error(error.message);
                  
               }
               
            }
    }
    
    const getcartcount=()=>{
      let totcount=0;
      for (const items in cartItems){
         for( const item in cartItems[items]){
           try{
            if(cartItems[items][item])
            {
               totcount+=cartItems[items][item]
            }
           }
           catch (error){
                      
         } 
         }
     
      }
      return totcount;
    }

const updatequantity = async (itemId,size,quantity)=>{
              let cartData=structuredClone(cartItems)

              cartData[itemId][size]=quantity;
              setcartitems(cartData);
              if(token){
               try {
                   await axios.post(backendUrl+'/api/cart/update',{itemId,size,quantity},{headers:{ token }})
               } catch (error) {
                  console.log(error);
                  toast.error(error.message);
               }
              }
}
const getcartamount =()=>{
         let totalamount=0;

         for(const items in cartItems){
            let iteminfo=products.find((product)=>product._id===items);
            for(const item in cartItems[items]){
               try{
                 if(cartItems[items][item]>0){
                  totalamount+=iteminfo.price * cartItems[items][item]
                 }
            } catch(error){


            }

            }
         }
         return totalamount;

}
const getProductsData = async () => {
   try {
      const response = await axios.get(backendUrl+'/api/product/list')
       console.log(response); // Log the entire response to inspect the structure
       if (response.data.success) {
           setProducts(response.data.products);
       } else {
           toast.error(response.data.message || 'Error fetching products');
       }
   } catch (error) {
      console.log(error);
      toast.error(error.message);
   }
}

const getUserCart = async(token)=>{
   try {
      const response = await axios.post(backendUrl+'/api/cart/get',{},{headers:{ token }})
    // console.log(response)

      if(response.data.success){
         console.log(response.data)
         setcartitems(response.data.cartData)
      }
   } catch ( error) {
      console.log(error);
      toast.error(error.message);
   }
}

useEffect(()=>{
   
getProductsData();

},[])

useEffect(()=>{
     if(!token && localStorage.getItem('token')){
              setToken(localStorage.getItem('token'))
              
              getUserCart(localStorage.getItem('token'))
     }
},[])

const value ={
         products,currency,del_fee,
         search,setsearch,showsearch,setshowsearch,
         cartItems,addtocart,setcartitems,
         getcartcount,updatequantity,getcartamount,navigate,backendUrl,setToken,token
      }
return(
    <Shop.Provider value={value}>
       {props.children}
    </Shop.Provider>
)
}



export default Shopcontextprovider;