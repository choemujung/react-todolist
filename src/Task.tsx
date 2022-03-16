import { useState } from "react";
import { Item } from "./Types";

interface TaskProps {
    task: Item;
}

function Task({task}: TaskProps) {
    const [checked, setCheck] = useState<boolean>(false);

    const checkHandler = () => {
        checked? setCheck(false):setCheck(true);
    }

    return (
        <div>
            <input type={"checkbox"} onChange={checkHandler}/>
            <span style={{
                textDecorationLine: checked ? 'line`-through':'none'
            }}>{task.text}</span>
        </div>
    )
}

export default Task;