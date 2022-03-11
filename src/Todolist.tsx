import React, { useState } from "react";

function Todolist() {
    interface workObj{
        id:number,
        memo:string;
    }

    const [work, setWork] = useState<workObj>({id: 0, memo:'sdf'});

    let workList: workObj[];

    return (
        <div>
            {work.id}{work.memo}
        </div>
    );

}

export default Todolist;