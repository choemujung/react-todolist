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
    
    // 컴포넌트로 만든 inputText를 여기서 사용할 수 있도록 수정 필요.
    return (
        <div>
            {
                isEditing ? // isEditing이 true면 <input>, false면 <Task>. 
                <input ref={editText} onBlur={onBlur} ></input> : /* 수정 상태일때 input이 포커스를 잃으면 onUpdate 실행. 수정 눌렀을 때 기존 텍스트 유지하는 기능 필요 */
                <span>
                <input type={"checkbox"} onChange={checkHandler}/>
                <span style={{
                    textDecorationLine: isChecked ? 'line-through':'none'
                }}>{task.text}            <button onClick={editHandler}>수정</button>
                <button onClick={()=>onRemove(task.id)}>삭제</button></span>
                </span>
            }
            {/*<span>
                <input type={"checkbox"} onChange={checkHandler}/>
                <span style={{
                    textDecorationLine: isChecked ? 'line-through':'none'
                }}>{task.text}</span>
            </span>*/}

{/*             s<button onClick={editHandler}>수정</button>
            <button onClick={()=>onRemove(task.id)}>삭제</button> */}
        </div>
    )
}

export default Task;