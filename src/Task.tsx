import { useRef, useState } from "react";
import { Item } from "./Types";

interface TaskProps {
    task: Item;
    onRemove: (id:number) => void;
    onUpdate: (id:number, text:string) => void;
}

function Task({task, onRemove, onUpdate}: TaskProps) {
    const editText = useRef<HTMLInputElement>(null);
    const [isChecked, setCheck] = useState<boolean>(false);
    const [isEditing, setEdit] = useState<boolean>(false);
    const checkHandler = () => {
        isChecked ? setCheck(false):setCheck(true);
    }
    const editHandler = () => {
        if(!isEditing) {
            setEdit(true);
        }
    }

    const onBlur = () => {
        if(editText.current !== null) {
            onUpdate(task.id, editText.current.value);
        }
        setEdit(false);
    }
    
    return (
        <div>
            {
                isEditing ? 
                <input ref={editText} onBlur={onBlur}></input> : 
                <span>
                <input type={"checkbox"} onChange={checkHandler}/>
                <span style={{
                    textDecorationLine: isChecked ? 'line-through':'none'
                }}>{task.text}</span>
                </span>
            }
            {/*<span>
                <input type={"checkbox"} onChange={checkHandler}/>
                <span style={{
                    textDecorationLine: isChecked ? 'line-through':'none'
                }}>{task.text}</span>
            </span>*/}

            <button onClick={editHandler}>수정</button>
            <button onClick={()=>onRemove(task.id)}>삭제</button>
        </div>
    )
}

export default Task;