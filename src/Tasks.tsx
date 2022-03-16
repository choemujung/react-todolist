import Task from "./Task";
import { Item } from "./Types";

interface TasksProps {
    tasks: Item[];
}

function Tasks({tasks}: TasksProps) {
    return (
        <>
            {tasks.map(task => (
                <Task task={task} key={task.id}/>
            ))}
        </>
    )
}

export default Tasks;