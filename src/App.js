import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Todo from './Todo';
import TodoForm from './TodoForm';
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn firebase",
      isCompleted: false
    },
    {
      text: "Walk in evening",
      isCompleted: false
    },
    {
      text: "Class assignment",
      isCompleted: false
    }
  ]);

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"} >
      <div className="heading">
        Todo app by using React-Hooks.
    </div>
      <DarkModeToggle
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode}
        size={60}
        speed={3}
      />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
