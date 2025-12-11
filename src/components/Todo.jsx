import React, { useState } from 'react';

export default function Todo() {
  const [tasks, setTasks] = useState([]); 
  const [todo, setTodo] = useState("");  

  function handleInputChange(event) {
    setTodo(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault(); 
    if (todo.trim() === "") return; 
    setTasks([...tasks, { id: Date.now(), complete: false, text: todo }]);
    setTodo(""); 
  }

  return (
    <>
      <div className='border px-9 py-5 rounded-2xl flex gap-4'>
        <input
          value={todo}
          onChange={handleInputChange} // only one input handler
          type="text"
          className="flex-1 h-10 rounded-3xl bg-amber-400/90 text-black px-5"
          placeholder='To do...'
        />
        <button
          onClick={handleAddTask} // React requires capital C
          className="flex items-center justify-center rounded-3xl bg-red-700 text-black h-10 px-5"
        >
          Add
        </button>
      </div>

      {/* Optional: show tasks */}
      <ul className="mt-4 space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}
