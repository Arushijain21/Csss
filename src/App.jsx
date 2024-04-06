import React, { useState } from 'react';
import './index.css'; 

const App = () => {
  const [task, setTask] = useState([
    { title: "Gym", completed: false },
    { title: "class", completed: true },
    { title: "breakfast", completed: false },
    { title: "danceClass", completed: true },
  ]);

  const [newTask, setNewTask] = useState(""); 

  const handleInputChange = (e) => {
    setNewTask(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") { // Check if the new task is not emptygiu
      setTask([...task, { title: newTask, completed: false }]); 
      setNewTask(""); 
    }
  };

  let taskRender = task.map((task, index) => (
    <li key={index}>{task.title}</li>
  ));

  return (
    <div className='w-screen h-screen p-[5%] bg-red-300'>
      <h1>Task List</h1>
      <ul>{taskRender}</ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;
/*
import React, { useState } from 'react';
import './index.css'; // Import CSS file

const App = () => {
  const [task, setTask] = useState([
    { title: "Gym", completed: false },
    { title: "class", completed: true },
    { title: "breakfast", completed: false },
    { title: "danceClass", completed: true },
  ]);

  let taskRender = task.map((task, index) => (
    <li key={index}>{task.title}</li>
  ));

  return (
    <div className='w-screen h-screen p-[5%] bg-red-700 text-3xl'>
      <ul className='list-disc'>{taskRender}</ul>
    </div>
  );
}

export default App;
*/
 /*
 <div className='w-screen h-screen p-[5%] bg-red-300'>
      <h1 className='text-zinc-700 text-5xl'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      </h1>
    </div>
 */