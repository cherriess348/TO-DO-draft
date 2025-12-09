import React, { useState } from 'react'
 

export default function Counter() {
    const  [count,setNum] = useState(0);
    const increase=()=>{setNum(count+1);}
    const decrease = ()=> {setNum(count-1);}
    const reset = ()=> {setNum(0);}

  return (
    
     <>
     
         <div className='border p-2 rounded-2xl flex items-center flex-col gap-4'>
            <p className='text-3xl text-amber-800'>Counter</p>
            <h2>{count}</h2>
            
            <div className='flex gap-x-2 justify-between'>
                <button className='rounded-2xl bg-amber-800 px-2' onClick={increase}>decrease</button>
                <button className='rounded-2xl bg-sky-300 px-2' onClick={reset}>reset</button>
                <button className='rounded-2xl bg-amber-300 px-2' onClick={decrease}>increase</button>
            </div>
            
         </div>
     
        
     </>
  )
}
