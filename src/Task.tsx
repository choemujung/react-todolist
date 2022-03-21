import { useRef, useState } from "react";
import { Item } from "./Types";

interface TaskProps {
    task: Item;
    onRemove: (id: number) => void;
    onUpdate: (id: number, text: string) => void;
}


function Task({ task, onRemove, onUpdate }: TaskProps) {
    const EditTask = () => {
        return (
            < input ref={editText} onBlur={onBlur} value={task.text} ></input >
        )
    }
    const ViewTask = () => {
        return (
            <span>
                <input type={"checkbox"} onChange={checkHandler} />
                <span style={{
                    textDecorationLine: isChecked ? 'line-through' : 'none'
                }}>
                {task.text}            
                <button onClick={editHandler}>수정</button>
                <button onClick={() => onRemove(task.id)}>삭제</button>
                </span>
            </span>
        )
    }

    const editText = useRef<HTMLInputElement>(null);

    const [isChecked, setCheck] = useState<boolean>(false);
    const [isEditing, setEdit] = useState<boolean>(false);
    
    const checkHandler = () => {
        isChecked ? setCheck(false) : setCheck(true);
    }
    const editHandler = () => {
        if (!isEditing) {
            setEdit(true);
        }
    }
    const onBlur = () => {
        if (editText.current !== null) {
            onUpdate(task.id, editText.current.value);
        }
        setEdit(false);
    }
    // 컴포넌트로 만든 inputText를 여기서 사용할 수 있도록 수정 필요.
    return (
        <div>
            {
                isEditing ?
                    EditTask() :
                    ViewTask()
            }

        </div>
    )
}

export default Task;