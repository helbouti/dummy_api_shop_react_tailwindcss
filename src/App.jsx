import { useEffect, useState } from 'react'
import Product from './components/Product'
import Cart from './components/Cart';

function App() {
  const [carts, setCarts] = useState([])
  
  
  useEffect(()=>{
    const getCarts=async ()=>{
      try{
        const reponse=await fetch("https://dummyjson.com/carts");
        const data=await reponse.json()
        setCarts(data.carts)

      }catch{
        console.log("there was error");        
      }
      
      
    }
    getCarts()  
  },[]);
  
  
  let counter=0
  return (
    
    <>
    {
      carts.map((cart)=>{
        counter++
        return <Cart key={cart.id} data={cart} />
      })
    }
     
    </>
  )
}

export default App
