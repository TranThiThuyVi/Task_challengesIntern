import React from 'react';
import { List, Button } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, removeTodo, activeTab, clearCompleted }) => {
  const hasCompletedTodos = todos.some(todo => todo.completed);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <List style={{ width: "400px" }}>
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
      </List>
      {activeTab === 'Completed' && hasCompletedTodos && (
        <Button
          variant="contained"
          onClick={clearCompleted}
          style={{ marginTop: '20px', backgroundColor: '#ba000d', marginLeft: '250px'}}
        >
          Delete All
        </Button>
      )}
    </div>
    
  );
};

export default TodoList;
