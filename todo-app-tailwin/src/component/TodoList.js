import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, removeTodo, activeTab, clearCompleted }) => {
  const hasCompletedTodos = todos.some(todo => todo.completed);

  return (
    <div className="flex flex-col items-center">
      <div className="w-96">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            hideDeleteIcon={activeTab === 'All'} 
          />
        ))}
      </div>
      {activeTab === 'Completed' && hasCompletedTodos && (
        <button
          onClick={clearCompleted}
          className="mt-5 ml-64 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default TodoList;
