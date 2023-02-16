import React, { useReducer } from 'react';

const reduceCounter =(state,action)=>{
 if(action.type==="increment"){
    return state+=action.payload;
 }

  if(action.type==="decrement"){
    return state-action.payload;
 }

 return state
}

const ReducerPratices = () => {
    const [count,dispatch] =useReducer(reduceCounter,0)  
     
    //  useReducer(functionName,initialValue )
    return (
        <div>
            <h3>Count : {count}</h3>
            <button style={{
                padding:'5px 10px',
                backgroundColor:'#f2f2f2'
            }}
            
            onClick={()=>dispatch({type:'increment',payload:5})}
            > +</button>

              <button style={{
                padding:'5px 10px',
                backgroundColor:'#f2f2f2'
            }}
            
            onClick={()=>dispatch({type:'decrement',payload:4})}
            > - </button>
        </div>
    );
};

export default ReducerPratices;