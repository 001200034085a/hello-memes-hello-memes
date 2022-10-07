import React, { useEffect, useState } from "react";

export default function JavItem(props){
    const { name, date, like, amount, watched, id, onWatched, onDelete, onEdit, onLike} =props
    const [editing, setEditing]=useState(false);
    const [newName, setNewName]=useState('');
    const [newDate, setNewDate]=useState('');
    const [newAmount, setNewAmount]=useState('');
    const [newWatched, setNewWatched]=useState('');


    const Edit=()=>{
       setEditing(false);
       setNewName('');
       setNewDate('');
       setNewAmount('');
       setNewWatched('');

       onEdit(id,newName,newDate,newAmount,newWatched);
    }

    const anebleEdit=()=>{
        setEditing(true)
    }

    

    return(
        <div>
            {editing ? <input type="text" onChange={(event)=>setNewName(event.target.value)} />:<b>{name}</b>}
            {editing ? <input type="date" onChange={(event)=>setNewDate(event.target.value)} />:<c>{date}</c>}
            <div>{like}</div>&nbsp;
            {editing ? <input type="number" onChange={(event)=>setNewAmount(event.target.value)}/>:<d>{amount}</d>}
            {editing ? <input type="text" onChange={(event)=>setNewWatched(event.target.value)}/>:<code>{watched ? "watched":""}</code>}
            <button onClick={()=>{onWatched(id)}}>xem</button>
            <button onClick={()=>{onDelete(id)}}>xóa</button>
            <button onClick={()=>{onLike(id)}} >like</button>
            {editing ?<button onClick={Edit}>lưu</button>:<button onClick={anebleEdit}>sửa</button>}
        </div>
    )
}