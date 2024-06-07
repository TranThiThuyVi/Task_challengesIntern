import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask('');
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add details"
          className="border border-gray-300 rounded px-4 py-2 w-64"
        />
        <button
          type="submit"
          className="ml-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
