
import { useState, useEffect } from 'react';
import './App.css';
import Form from './pages/Form';
import TaskList from './pages/TaskList';


function App() {

  const [allTasks, updateAllTasks] = useState([])

  useEffect(() => {
    console.log('Updated Tasks:', allTasks); // Logs the updated state
  }, [allTasks]); 

  function addTask(task) {
    const newTask = { id: Date.now(), task }; // Ensure tasks have unique IDs
    updateAllTasks([...allTasks, newTask]);
  }

  function deleteTask(id){
    updateAllTasks([...allTasks].filter((task)=> task.id !== id));
  }

  function editTask(id,updatedTask){
    updateAllTasks(
      allTasks.map((task) => (task.id === id ? { ...task, task: updatedTask } : task))
    );
  }
  
  return (
    <div className='App'>
      <div className='textBox' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src='./image/appimage.webp' alt='appimage' style={{width:'200px', height:'200px'}}/>
      </div>
      <div className='textBox' style={{backgroundColor:'rgb(204, 240, 238)', borderRadius:'8px'}}>
      <h1>To do list</h1>
      <Form onAdd={addTask}/>
      <TaskList allTasks={allTasks} onDelete={deleteTask} onEdit={editTask}/>
      </div>
    </div>
  );
}

export default App;
