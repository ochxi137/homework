import { useState } from "react";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (text.trim() === "") return;
    setTasks([...tasks, { text, completed: false }]);
    setText("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function toggleComplete(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <h2>✨ To-Do List ✨</h2>

      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(index)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
