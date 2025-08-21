import React, { useState } from 'react'
import { Contextdata } from './CartContext'

const Cart = () => {
  const [text, settext] = useState("empty")
    const data=Contextdata()
    console.log(data);
    let total=data.item.reduce((a,b)=>{
          return a+b.price
    },0)
    let render=<h2 className='p-3'>cart is empty</h2>
    if(data.item.length>0 ) {

      
     render= data.item.map((e,idx)=>(
             
        <div key={idx} className='  bg-amber-300 flex justify-center p-2 mt-2 flex-col items-center list-none'>
           <h1 className=''>Item : {idx+1}</h1>
          <li>name :{e.name}</li>
          <li>price :{e.price}</li>
      </div>
    
  ))
}

  return (
    <div className='w-full justify-center flex text-center flex-col align-center '>
       
    {/* {data &&  data.item.map((e,idx)=>(
      
          <div key={idx} className='  bg-amber-300 flex justify-center p-2 mt-2 flex-col items-center list-none'>
               <h1 className=''>Item : {idx+1}</h1>
              <li>name :{e.name}</li>
              <li>price :{e.price}</li>
          </div>
        
      ))} */}
      {render}
   
    <div className='w-full text-center p-3 bg-zinc-300 justify-center flex flex-col align-center '> 
      total price :{total} 
      </div>
    </div>
  )
}

export default Cart