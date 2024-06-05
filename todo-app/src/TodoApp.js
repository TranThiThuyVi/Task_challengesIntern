import React, { useState, useEffect } from 'react';
import TodoFilters from './component/TodoFilter';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import './todo.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('All');
  
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) {
        setTodos(storedTodos);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (task) => {
      setTodos([...todos, { task, completed: false }]);
    };
  
    const toggleComplete = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    const removeTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };
  
    const clearCompleted = () => {
      const newTodos = todos.filter(todo => !todo.completed);
      setTodos(newTodos);
    };
  
    const moveToCompleted = (index) => {
      const newTodos = [...todos];
      const todo = newTodos.splice(index, 1)[0];
      setTodos([
        ...newTodos,
        { ...todo, completed: true }
      ]);
    };
  
    const filteredTodos = todos.filter(todo => {
      if (filter === 'All') return true;
      if (filter === 'Active') return !todo.completed;
      if (filter === 'Completed') return todo.completed;
      return false;
    });
  
    return (
      <Container className="TodoApp">
        <Typography variant="h3" gutterBottom>
          Todo App
        </Typography>
        <TodoFilters setFilter={setFilter} clearCompleted={clearCompleted} />
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          clearCompleted={clearCompleted}
          moveToCompleted={moveToCompleted}
          activeTab={filter}
        />
      </Container>
    );
  };

export default TodoApp;
