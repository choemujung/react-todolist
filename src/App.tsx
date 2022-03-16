import React, { MutableRefObject, useRef, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import { Item } from './Types';

function App() {
  const nextId:MutableRefObject<number> = useRef<number>(1);
  const inputText = useRef<HTMLInputElement>(null);
  const [tasks, setTasks] = useState<Item[]>([]);

  // const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   inputText.current = e.target.value;
  //   console.log(inputText.current );
  // }
  const onCreate = () => {
    if (inputText.current != null) {
      const newTask:Item = {
        id: nextId.current++,
        text: inputText.current.value
      };
      inputText.current.value = '';
      setTasks([...tasks, newTask]);
    }
  }

  const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCreate();
    }
  }

  const onRemove = (id:number) => {
  }

  return (
    <div onKeyPress={onKeyPress}>
      <input placeholder='할일추가' ref={inputText} />
      <button onClick={onCreate}>등록</button><br/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

