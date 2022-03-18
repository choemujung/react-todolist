import { useRef } from "react";


interface InputTextProps {
    onCreate: (newText:string) => void;
}


function InputText({onCreate}: InputTextProps) {   
    //useRef를 이용하여 input dom 선택
    const inputText = useRef<HTMLInputElement>(null);

    // input value를 상태로 관리하면 리렌더링되기때문에 useRef로 관리
    const onClick = ():void => {
        if(inputText.current !== null) {
            console.log(inputText.current.value);
            onCreate(inputText.current.value); 
            inputText.current.value = '';
            inputText.current.focus();
        }
    }

    // 엔터 키 처리
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