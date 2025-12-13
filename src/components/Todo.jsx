import { useState } from 'react';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  function handle(event) {
    setNewtask(event.target.value);
  }

  function addTask() {
    if (newtask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newtask, complete: false }]);
    }
    setNewtask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function startEdit(task) {
    setEditingId(task.id);
    setEditingText(task.text);
  }

  function saveEdit(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: editingText } : task
      )
    );
    setEditingId(null);
    setEditingText("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingText("");
  }

  return (
    <div className='border border-amber-300 px-9 py-5 rounded-2xl flex flex-col gap-3 items-center'>
      
      {/* Add Task */}
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
          className="flex items-center justify-center text-white border border-white/30 rounded h-12 px-5"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="text-left w-92 mt-4">
        {tasks.map(task => (
          <li
            key={task.id}
            className="bg-white/20 text-white p-3 rounded-lg mb-2"
          >
            <div className="flex justify-between items-center">

              {/* View / Edit Mode */}
              {editingId === task.id ? (
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-1 mr-3 px-2 py-1 rounded text-black"
                />
              ) : (
                <div>{task.text}</div>
              )}

              {/* Actions */}
              <div className="flex gap-x-2">
                {editingId === task.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(task.id)}
                      className="bg-green-500 px-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 px-2 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEdit(task)}
                      className="bg-blue-500 px-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-400 px-2 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
