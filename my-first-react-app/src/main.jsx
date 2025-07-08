import React, { useState } from "react";
import "./App.css"; // Para los estilos simples

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, id: Date.now() }]);
      setInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 Lista de Tareas</h1>
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button onClick={addTask}>Agregar</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
