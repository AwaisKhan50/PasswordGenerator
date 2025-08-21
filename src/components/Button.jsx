import React, { useContext } from 'react'
import { themeContext } from '../Apps'

const Button = () => {
  // let fruits=["apple","banana","mango","grapes"]
  let fruits=[];
    const {theme,settheme}=useContext(themeContext)
    function handleClick(){
        if(theme=="white"){
            settheme("black")
        }
        else{
            settheme("white")
        }
    }
  return (
    <div><button className='p-2 bg-amber-400 abosolute m-50' onClick={handleClick}>switch to {theme=="white"?"dark":"light"}</button>
    {fruits.length===0 && <h1 className='text-center p-4'>no items added yet</h1>}
    <ul className='flex justify-center items-center flex-col'>
      {fruits.map((item,idx)=>(
        <li key={idx} className='list-none'>{idx+1} {item}</li>
      ))}
       {/* {fruits.map((item)=>{
        return (
          <>
          <li className='bg-amber-300 w-full justify-center flex gap-10 p-4'>{item}</li>
          </>
        )
       })} */}
      <h1>ajskhfkjas</h1>
    </ul>
    </div>
  )
}

export default Button