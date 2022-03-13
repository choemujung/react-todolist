import React from "react";
import ToDo from "./ToDo";

type Todo = {
    id: number;
    task: string;
};

type ToDoList ={
    taskList: Todo[];
}

function ToDoList({taskList}:ToDoList) {
    return (
        <>
            {taskList.map(task => (
                <ToDo task={task.task} key={task.id}/>
            ))}
        </>
    )
}

export default ToDoList;