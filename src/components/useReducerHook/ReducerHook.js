import React, { useReducer } from 'react';


const initial =0 ;
const reduceHandler =(state,action)=>{
    if(action.type === 'inc'){
        return state+1;
    }
   if(action.type==='dec'){
        return state-1;
    }

    return state;

}

const ReducerHook = () => {
 // declare the use reducer hook 

  const [state,dispatch] =useReducer(reduceHandler,initial)
    return (
        <div>
            <p>Counter : {state}</p>
             <button onClick={()=>dispatch({type:"inc"})} >Increment</button>
             <button onClick={()=>dispatch({type:"dec"})} >Decrement</button>
        </div>
    );
};

export default ReducerHook;