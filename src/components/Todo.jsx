
import React, { useState } from 'react';


export default function todo() {

const [tasks, setTasks] = useState([]); // array of tasks
  const [todo, setTodo] = useState("");   // current input value

  // Update input value
  function handleInputChange(event) {
    setTodo(event.target.value);
  }

  // Add new task to list
  function handleAddTask(event) {
    event.preventDefault(); // prevent page reload
    if (todo.trim() === "") return;      // ignore empty input
    setTasks([...tasks, {id:Date.now(),complete: false, text:input}]);          // add new task
    setTodo(""); 
}
function Inputting(e){
    setTodo(e.target.value)
}



  return (
    <>  
         <div action=""className='border px-9 py-5 rounded-2xl flex gap-4'>
            <input value={todo} onChange={Inputting}    type="text"className="w-70 h-10 rounded-3xl bg-amber-400/90 text-black p-5 " placeholder='To do...' />
            <button onClick={handleAddTask}   className="flex items-center justify-center rounded-3xl bg-red-700  text-black h-10 px-5 ">Add</button>
         </div>
      
    
    
    </>
  )
}
