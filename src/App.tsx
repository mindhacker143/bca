import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Div1 from './div1'
import Div2 from './div2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='h-screen w-screen bg-white'>
    <Div1></Div1>
    <Div2></Div2>
   </div>
    </>
  )
}

export default App
