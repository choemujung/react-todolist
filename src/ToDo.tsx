import React, { useState } from "react";

type Todo = {
    task: string;
};

function ToDo({task}: Todo) {
    const [checked, setCheck] = useState<boolean>(false);

    const checkHandler = () => {
        checked? setCheck(false):setCheck(true);
    }
    return (
        <div>
            <input type={"checkbox"} onChange={checkHandler}/>
            <span style={{
                textDecorationLine: checked ? 'line-through':'none'
            }}>{task}</span>
        </div>
    )
}

export default ToDo;