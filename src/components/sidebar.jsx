import { useState } from 'react';

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  onAddCategory,
  onClose,
}) {
  const [newCategory, setNewCategory] = useState('');

  function handleAdd() {
    onAddCategory(newCategory);
    setNewCategory('');
  }

  return (
    <div className="h-full text-white p-4 flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-xl font-bold">Categories</h2>
        <button
          onClick={onClose}
          className="text-white text-2xl"
        >
          ✕
        </button>
      </div>

      {/* Categories */}
      <div>
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition ${
            selectedCategory === null ? 'bg-gray-700 font-semibold' : ''
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition ${
              selectedCategory === category ? 'bg-gray-700 font-semibold' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Add Category */}
      <div className="border-t border-gray-600 pt-3 mt-auto">
        <h3 className="text-sm text-gray-300 mb-2">Add Category</h3>
        <div className="flex gap-2">
          <input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category"
            className="flex-1 px-2 py-1 rounded bg-gray-700 outline-none"
          />
          <button
            onClick={handleAdd}
            className="px-3 py-1 bg-emerald-600 rounded hover:bg-emerald-700"
          >
            +
          </button>
        </div>
      </div>

    </div>
  );
}
