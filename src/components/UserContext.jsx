import React, { createContext, useContext, useState } from 'react'

export const Usedata=createContext(null)
const UserContext = ({children}) => {
    const [count, setcount] = useState(0)
    const [data, setdata] = useState({names:"salman",age:20})
  return (
    <Usedata.Provider value={{count,setcount}}>
        {children}
    </Usedata.Provider>
  )
}
export const UseContext = () => {
    return (
        useContext(Usedata)
    )
  }


export default UserContext