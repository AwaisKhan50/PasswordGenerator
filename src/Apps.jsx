import React, { createContext, useState } from 'react'
import Button from './components/Button';
 export const themeContext=createContext();
const Apps = () => {
    const [theme, settheme] = useState("white")
  return (
     <themeContext.Provider value={{theme, settheme}}>
        <div  style={{backgroundColor:theme, height:"100vh"}}>
            <h1 style={{color:theme==="white"?"black":"white"}}>this is what i want to become </h1>
            <Button/>
        </div>
     </themeContext.Provider>
    
  )
}

export default Apps