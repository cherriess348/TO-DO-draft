import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx'
import Doing from './Doing.jsx'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex  items-center mt-4  flex-col gap-6  bg-amber-800'>
         <Counter></Counter>
         
        <Doing></Doing>
        <div className='flex flex-col mx-10 mt-[100px]'>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iste eaque saepe minus aperiam corrupti aliquid suscipit. Enim, dolores distinctio quibusdam sint ipsam earum autem rerum, iste delectus ea illum?</div>

         <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iste eaque saepe minus aperiam corrupti aliquid suscipit. Enim, dolores distinctio quibusdam sint ipsam earum autem rerum, iste delectus ea illum?</div>

         <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iste eaque saepe minus aperiam corrupti aliquid suscipit. Enim, dolores distinctio quibusdam sint ipsam earum autem rerum, iste delectus ea illum?</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iste eaque saepe minus aperiam corrupti aliquid suscipit. Enim, dolores distinctio quibusdam sint ipsam earum autem rerum, iste delectus ea illum?</div>

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iste eaque saepe minus aperiam corrupti aliquid suscipit. Enim, dolores distinctio quibusdam sint ipsam earum autem rerum, iste delectus ea illum?</div>
        </div>
         
    </div>
        

    </>
  )
}

export default App
