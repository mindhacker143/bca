import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Div1 from './div1'
import Footer from './footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='h-screen bg-white'>
    
   <div className="relative ">
    <img src="../img/1.jpeg" className='w-screen' alt="" />
    <img src="../img/4.jpeg" className='w-screen' alt="" />
   <Navbar />
   <Div1 />
   <Footer />
</div>
    
   </div>
    </>
  )
}

export default App
