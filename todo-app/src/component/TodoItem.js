import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon  from '@mui/icons-material/DeleteOutline';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const TodoItem = ({ todo, index, toggleComplete, removeTodo, hideDeleteIcon }) => {
  const handleCheckboxChange = () => {
    toggleComplete(index);
  };

  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <ListItemText
        primary={todo.task}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
      {!hideDeleteIcon && todo.completed && (
        <IconButton onClick={() => removeTodo(index)} aria-label="delete" color="white">
          <DeleteOutlineIcon />
        </IconButton>
      )}
    </ListItem>
  );
};

export default TodoItem;
