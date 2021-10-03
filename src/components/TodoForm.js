import React from "react";
import { v4 as uuidv4 } from "uuid";

import './TodoForm.css';

function TodoForm({taskList, setTaskList}) {

    const addTask = (event) =>{
        event.preventDefault();
        const task = event.target.taskInput.value;
        event.target.taskInput.value = "";
        if(task === ""){
            alert("Task cannot be empty");
        }
        else{
            setTaskList([...taskList,{id : uuidv4(), task : task, completed : false}]);
        }
    }

    return (
        <form onSubmit={addTask}>
            <div className="form-container">
                <div className="form-item">
                    {/* Task input */}
                    <label htmlFor="taskInput"><h3>Task : </h3></label>
                    <input type="text" name="taskInput"/>
                </div>
                <div className="form-item">
                    {/* Submit button */}
                    <input type="submit" className="btn-grad" />
                </div>
            </div>
        </form>
    )
}

export default TodoForm;