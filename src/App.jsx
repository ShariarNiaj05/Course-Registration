import { useState } from 'react'

import './App.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className=' p-5 container mx-auto'>
      <h1 className=' text-6xl text-center font-bold mb-5'>Course Registration</h1>
      <Home></Home>
      </div>
      
      
    </>
  )
}

export default App
