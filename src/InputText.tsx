import { useRef } from "react";

interface InputTextProps {
    onCreate: (newText:string) => void;
}

function InputText({onCreate}: InputTextProps) {
    const inputText = useRef<HTMLInputElement>(null);

    const onClick = ():void => {
        if(inputText.current !== null) {
            console.log(inputText.current.value);
            onCreate(inputText.current.value);
            inputText.current.value = '';
        }
    }
    const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>):void => {
        if(e.key === 'Enter'){
            onClick();
        }        
    }
    return (
        <div onKeyPress={onKeyPress}>
            <input placeholder="할일" ref={inputText}></input>
            <button onClick={onClick} >추가</button>
        </div>
    )
}

export default InputText;