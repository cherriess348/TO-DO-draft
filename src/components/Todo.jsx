import { useState } from 'react';

export default function Todo() {

  const [tasks, setTasks] = useState([]); 
  const [newtask, setNewtask] = useState("");

  function handle(event){
    setNewtask(event.target.value);
  }

  function addTask() {
    if (newtask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newtask, complete: false }]);
    }
    setNewtask("");
  }

  return (
    <div className='border border-amber-300  px-9 py-5 rounded-2xl flex flex-col gap-3 items-center'>
      <div className="flex gap-x-2">
        <input
          value={newtask}
          onChange={handle}
          type="text"
          className="w-72 h-12 rounded-2xl bg-amber-400/90 text-black p-4"
          placeholder="To do..."
        />
        <button
          onClick={addTask}
          className="flex items-center justify-center text-white border-[1px] border-white/30 rounded-[2px]  h-12 px-5 "
        >
          Add
        </button>
      </div>

      {/* Correct: use tasks.map */}
      <ul className="text-left w-92 mt-4">
        {tasks.map(task => (
          <li
            key={task.id}
            className="bg-white/20 text-white p-3 rounded-lg mb-2 "
          >
            {task.text}
          </li>
        ))}
      </ul>

    </div>
  );
}
