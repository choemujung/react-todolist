import Task from "./Task";
import { Item } from "./Types";

interface TasksProps {
    tasks: Item[];
    onRemove: (id:number) => void;
    onUpdate: (id:number, text:string) => void;
}

function Tasks({tasks, onRemove, onUpdate}: TasksProps) {
    return (
        <div>
            {tasks.map(task => (
                <Task task={task} key={task.id} onRemove={onRemove} onUpdate={onUpdate}/>
            ))}
        </div>
    )
}

export default Tasks;