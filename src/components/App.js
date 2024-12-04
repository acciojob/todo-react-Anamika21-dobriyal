import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [task, setTask] = useState(""); // State for the current task input
  const [todos, setTodos] = useState([]); // State for the list of tasks

  // Function to handle adding a new task
  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]); // Add the task to the list
      setTask(""); // Clear the input field
    }
  };

  // Function to handle removing a task
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); // Update the task list
  };

  return (
    <div className="todo-container">
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="delete-button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
