import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, removeTodo, hideDeleteIcon }) => {
  const handleCheckboxChange = () => {
    toggleComplete(index);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className={`flex-1 ml-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.task}
      </span>
      {!hideDeleteIcon && todo.completed && (
        <button
          onClick={() => removeTodo(index)}
          aria-label="delete"
          className="ml-4 p-1 text-slate-300 hover:text-red-800"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6h18v2H3zm2 3h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9zm5 0v10h2V9H8zm4 0v10h2V9h-2z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default TodoItem;
