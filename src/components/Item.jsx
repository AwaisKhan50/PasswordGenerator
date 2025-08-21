import React from 'react'
import { Contextdata } from './CartContext'

const Item = ({name,price}) => {
    const data=Contextdata()
    let items=data.item
  return (
    <>
    <div className='w-full justify-center flex flex-col items-center mt-8 '>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <button  className='p-2 mt-2 rounded border-2 bg-amber-200 cursor-pointer' onClick={()=>data.setitem([...items,{name,price}])}>add to cart</button>
    </div>
    
    </>
    
  )
}

export default Item