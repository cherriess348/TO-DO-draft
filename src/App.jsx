import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Doing from './components/Doing.jsx'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body  className='bg-orange-300'>
       <div className='flex   '>
          
         
        <Doing ></Doing>
        
        
         
    </div>
    </body>
   
        

    </>
  )
}

export default App
