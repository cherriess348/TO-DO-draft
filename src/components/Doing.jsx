import React, { useState } from 'react'

import { FaAirFreshener } from "react-icons/fa";

export default function Doing() {
    const [count,setCount] = useState(0);
    const task = ()=>{setCount(count+1)}
  return (
    <> 
    <div className="border border-white/10 rounded-[5px] p-2 px-4 pt-5 bg-white/10 backdrop-blur-md absolute z-10 shadow-lg mt-[150px]">
        <div className='flex gap-7' id="btn" >
            
            <input type="text" placeholder="To do" className='border px-2 rounded-[5px]'/> 
            <FaAirFreshener className='text-3xl' onClick={task} />
        </div>
        
        <br />
        <div className='border-b-4 bg-blue-900'></div>
        <br />
        <p>kaeoaw</p>
        

     </div>
    </>
   
  )
}
