import React, { useState } from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {

    // const [task,setTask] = useState("");
    const [taskList,setTaskList] = useState([]);
    
    return (
        <div className="todo">
            <TodoForm setTaskList={setTaskList} taskList={taskList}/>
            <TodoList taskList={taskList} setTaskList={setTaskList}/>
        </div>
    )
}

export default Todo;