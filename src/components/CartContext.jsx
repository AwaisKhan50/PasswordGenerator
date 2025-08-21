
import { createContext, useContext, useState } from 'react'
import { UseContext, Usedata } from './UserContext'
const Useitem=createContext()
const CartContext = ({children}) => {
  const [item, setitem] = useState([])
   
  return (
    
       <Useitem.Provider value={{item,setitem}}>
             {children}
       </Useitem.Provider>
    
  )
}

export const Contextdata=()=>{
  return(useContext(Useitem))
}
export default CartContext