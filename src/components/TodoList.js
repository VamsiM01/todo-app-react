import React from "react";
import './TodoList.css';

function TodoList({taskList , setTaskList}) {

    const removeTask = (id) => {
        setTaskList(taskList.filter(item => item.id !== id));
    }

    const toggleTaskComplete = (id) => {
        setTaskList(taskList.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    completed : !item.completed
                }
            }
            return item;
        }));
    }

    const list = taskList.map((item) => {
        return (
            // <li key={item.id}>
            //     {item.task}
            //     <button onClick={() => toggleTaskComplete(item.id)}>Completed</button>
            //     <button onClick={() => removeTask(item.id)} >Delete</button>
            // </li>
            <div key={item.id} className="li-container">
                <li className={`list-item left ${item.completed ? 'complete' : ''}`} >{item.task}</li>
                <button className="list-item" onClick={() => toggleTaskComplete(item.id)}>Completed</button>
                <button className="list-item" onClick={() => removeTask(item.id)} >Delete</button>
            </div>
        )
    });
    return (
        <div>
            {/* List of tasks */}
            {list}
        </div>
    )
}

export default TodoList;