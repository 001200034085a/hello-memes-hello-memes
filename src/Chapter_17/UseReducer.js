import React, { useReducer } from "react";

// bộ chuyển đổi
const countReducer =(state, action)=>{
    switch(action.type){
        case "Tang":{
            return{
                ...state,
                count :state.count +1
            }
        }
        case "Giam":{
            return{
               ...state,
               count :state.count -1
            }
        }
        default :
        throw new Error();
    }
}

export default function UseReducer(){
    const [state, dispatch] = useReducer(countReducer,{count:0});

    const handleInCrease =()=>{
        dispatch({type:"Tang"})
    }
    const handleDeCrease =()=>{
        dispatch({type:"Giam"})
    }

    return(
        <div>
             <h1>number:{state.count}</h1>
             <button onClick={handleInCrease}>+</button>
             <button onClick={handleDeCrease}>-</button>
        </div>
    )
}