
// import Card from './components/Card'
// import ChangeColProject from './components/ChangeColProject'
import { useContext, useState } from 'react'
// import PasswordGene from './components/PasswordGene'
// import Counter from './components/Counter'
// import { UseContext} from './components/UserContext'
import Item from './components/Item'
import CartContext from './components/CartContext'
import Cart from './components/Cart'

const App = () => {
  const [col,setcol ] = useState("black")
  const names=["awais","ali","ahmad","salman","asim"]
  const data=[
    {
      "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "title": "John Doe",
      "description": "Software Engineer with 5+ years of experience in web development and cloud computing."
    },
    {
      "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
      "title": "Jane Smith",
      "description": "Graphic Designer specializing in branding and digital illustration. Passionate about minimalist design."
    },
    {
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "title": "Alex Johnson",
      "description": "Data Scientist with expertise in machine learning and big data analytics. Loves solving complex problems."
    },
    {
      "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      "title": "Emily Brown",
      "description": "Marketing Strategist with a focus on digital marketing and social media campaigns. Always up-to-date with trends."
    },
    {
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "title": "Michael Lee",
      "description": "Product Manager with a strong background in agile methodologies and user-centered design."
    }
  ]
    
    
  return (
     <>

    <h1 className=' text-center py-5 shadow  shadow-black'>Counter </h1>
    
    <Item name={"ball"} price={200}/>
    <Item name={"bat"} price={300}/>
    <Item name={"reckets"} price={700}/>
      <Cart/>
     </>
 
      
      
  )
}

export default App