import React, { useEffect, useState } from "react";


export default function UseRef(){
    const inputRef = useState(null);

    useEffect(()=>{
        console.log(inputRef.current);
        inputRef.current.focus();
    },[]);

    const handleCreate =(event)=>{
        event.preventDefault();
        console.log(inputRef.current.value);
    }

    return(
        <div>
            <form onSubmit={handleCreate}>
                <input type="text" ref={inputRef} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}