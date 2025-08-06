import React, { useState } from 'react';

function TodoApp() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') return;

    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  return (
    <div>
      <h2>Todo App</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
