import React, { MutableRefObject, useRef, useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'

type ToDo = {
  id: number,
  task: string;
}

function App() {

  const [task, setTask] = useState<ToDo>(
    {
      id: 0,
      task: ''
    }
  )

  const nextId:MutableRefObject<number> = useRef<number>(1);

  const [tasks, setTasks] = useState<ToDo[]>([]);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      task:e.target.value
    });
  };

  const onCreate = () => {
    const newTask:ToDo = {
      id: nextId.current,
      task: task.task
    };
    setTasks([...tasks, newTask]);
    setTask({
      ...task,
      task:''
    })
  }

  const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCreate();
    }
  }

  return (
    <div onKeyPress={onKeyPress}>
      <input name="task" placeholder='할일추가' onChange={onChange} value={task.task}/>
      <button onClick={onCreate}>등록</button><br/>
      {tasks.length > 0 ? <ToDoList taskList={tasks}/> : null}
    </div>
  );
}

export default App;

