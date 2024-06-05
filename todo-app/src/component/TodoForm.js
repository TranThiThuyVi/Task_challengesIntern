import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        id="outlined-basic" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        label="Add details" 
        variant="outlined"
        style={{ width: '250px'}}
      />
      <Button 
        type="submit" 
        variant="contained" 
        style={{ width: '100px', height: "54px", marginLeft: '30px' }}
      >
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
