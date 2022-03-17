import React, { MutableRefObject, useRef, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import { Item } from './Types';
import InputText from './InputText';

function App() {
  const nextId:MutableRefObject<number> = useRef<number>(1);
  const [tasks, setTasks] = useState<Item[]>([]);

  const onCreate = (newText:string):void => {
    const newTask:Item = {
      id: nextId.current++,
      text: newText
    };
    setTasks([...tasks, newTask]);
  }

  const onRemove = (id:number):void => {
    setTasks(tasks.filter(task=>task.id !== id));
  }

  const onUpdate = (newId:number, newText:string) => {
    const newTasks = tasks.map((task:Item) => (task.id === newId) ? {id: newId, text: newText} : task);
    setTasks(newTasks);
  }
  
  return (
    <div>
      <InputText onCreate={onCreate}></InputText>
      <Tasks tasks={tasks} onRemove={onRemove} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;

