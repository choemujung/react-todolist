import { MutableRefObject, useRef, useState } from 'react';
import Tasks from './Tasks';
import { Item } from './Types';
import InputText from './InputText';

function App() {
  const nextId:MutableRefObject<number> = useRef<number>(1);
  const [tasks, setTasks] = useState<Item[]>([]);

  // task 삽입
  const onCreate = (newText:string):void => {
    const newTask:Item = {
      id: nextId.current++,
      text: newText
    };
    setTasks([...tasks, newTask]);
  }

  // task 삭제
  const onRemove = (id:number):void => {
    setTasks(tasks.filter(task=>task.id !== id));
  }
  // task 업데이트
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

