import { useState } from 'react';
import Todo from './components/Todo.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([
    'work',
    'personal',
    'study',
    'random',
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function addCategory(newCategory) {
    if (!newCategory.trim()) return;
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
    setSelectedCategory(newCategory);
    setSidebarOpen(false); 
  }

  return (
    <div className="flex min-h-screen bg-gray-900">
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white px-3 py-2 rounded"
      >
        ☰
      </button>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-50
          top-0 left-0 h-full
          w-64
          transform bg-gray-800
          transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setSidebarOpen(false);
          }}
          onAddCategory={addCategory}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 md:ml-0">
        <Todo selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
