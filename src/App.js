import React from 'react';

import './App.css';
import './styles.css';
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";
import VisibilityFilters from "./components/todos/VisibilityFilters";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h3>Todo App</h3>
          <TodoForm />
          <TodoList />
          <VisibilityFilters />
        </header>
      </div>
  );
}

export default App;
