import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from "./components/Account.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Todo from "./components/Todo.jsx";

 
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body  className='bg-blue-950 text-amber-50 font-serif
'>
      <div className='m-0 flex flex-col items-center mt-9'>
             <Todo></Todo>
            <br /><br /><br /><br />
            <Sidebar></Sidebar>
            <Account></Account>
      </div>
      
      
    </body>
   
        

    </>
  )
}

export default App
