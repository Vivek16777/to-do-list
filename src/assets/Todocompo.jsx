import React, { useState } from 'react';
import '../App.css';

function Todocompo() {
  const [task, setTask] = useState([]);
  const [newtask, setNewTask] = useState("");

  function addNewTask(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newtask.trim() !== "") {
      setTask(t => [...t, newtask]);
      setNewTask(""); 
    }
  }

  function deleteTask(index) {
    const updatedtask = task.filter((_, i) => i !== index);
    setTask(updatedtask);
  }

  function upTask(index) {
    const updatedtask = [...task];
    if (index > 0) {
      [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];
      setTask(updatedtask);
    }
  }

  function downTask(index) {
    const updatedtask = [...task];
    if (index < updatedtask.length - 1) {
      [updatedtask[index + 1], updatedtask[index]] = [updatedtask[index], updatedtask[index + 1]];
      setTask(updatedtask);
    }
  }

  return (
    <>
      <div className="todolist">
        <h1 className="todo-header">To-Do-List</h1>
        <div className="search">
          <input
            className="todo-input"
            type="text"
            value={newtask}
            placeholder="enter a task..."
            onChange={addNewTask}
          />
          <button className="add-button" onClick={addTask}>add task</button>
        </div>

        <div className="todo-list">
          <ol>
            {task.map((t, index) => (
              <li className="todo-item" key={index}>
                <span className="todo-work">{t}</span>
                <div className="button-group">
                  <button className="delete" onClick={() => deleteTask(index)}>delete</button>
                  <button onClick={() => upTask(index)}>move up</button>
                  <button onClick={() => downTask(index)}>move down</button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Todocompo;
