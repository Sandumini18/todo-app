import React from 'react'
import { useState } from 'react'

function Form(props) {
    const [task,setTask] = useState("");

    const changeHandler = (e) => {
        setTask(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onAdd(task);
        setTask("");
        console.log({task})
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' name='task' value={task} id='task' placeholder='Task' onChange={changeHandler} required/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form