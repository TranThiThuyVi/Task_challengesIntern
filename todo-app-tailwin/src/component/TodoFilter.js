import React from 'react';

const TodoFilters = ({ setFilter }) => {
  const [value, setValue] = React.useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilter(newValue);
  };

  return (
    <div className="flex justify-center mt-4 mb-4">
      <div className="border-b border-gray-500  w-1000">
        <button
          onClick={(e) => handleChange(e, 'All')}
          className={`px-4 py-2 mr-10 ${
            value === 'All'
              ? 'border-b-2 border-indigo-500 text-blue-400'
              : 'bg-white text-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={(e) => handleChange(e, 'Active')}
          className={`px-4 py-2 mr-10 ${
            value === 'Active'
              ? 'border-b-2 border-indigo-500 text-blue-400'
              : 'bg-white text-gray-700'
          }`}
        >
          Active
        </button>
        <button
          onClick={(e) => handleChange(e, 'Completed')}
          className={`px-4 py-2 ${
            value === 'Completed'
              ? 'border-b-2 border-indigo-500 text-blue-400'
              : 'bg-white text-gray-700'
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilters;
