import { useState } from 'react';

function TaskList(props) {

  const [editTask,setEditTask] = useState("");
  const [editTaskId,setEditTaskId] = useState();
  const [completeTask, setCompleteTask] = useState(false)

  const handleEdit = (taskId, currentTask) =>{
    setEditTaskId(taskId);
    setEditTask(currentTask);
  }

  const changeHandler = (e) => {
    setEditTask(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onEdit(editTaskId, editTask);
    setEditTaskId();
    setEditTask("");
  }

  const handleComplete = () => {
    setCompleteTask(prevCheck => !prevCheck);
    console.log({completeTask})
  }

  return (
    <div >
        <ul>
            {props.allTasks.map((g) => (
                <li key={g.id} className='text'>
                  {editTaskId ===g.id ? (
                    <form onSubmit={submitHandler} >
                      <input type='text' name='edittask' value={editTask} id='edittask' placeholder='Edit Task' onChange={changeHandler}/>
                      <button type='submit'>Update</button>
                    </form>
                   ):(
                   <span>
                    <div className='box' onClick={() => handleComplete(g.id)}>
                      
                    </div>
                    
                    {g.task}
                    
                    <img src="./image/images.png" alt="edit" onClick={()=>handleEdit(g.id, g.task)} className='btn'/>
                    <img src="./image/delete.png" alt="edit" onClick={()=>props.onDelete(g.id)} className='btn'/>
                    
                   </span>)
                  }
                    
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TaskList