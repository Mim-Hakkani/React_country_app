import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../../App';

const Child = () => {
    const {count,setCount} = useContext(COUNTER_CONTEXT)
    return (
        <div>
            <h4>Child Count :{count} </h4>

            <button onClick={()=>setCount((prev)=>prev+1)}>incerment</button>
            <button onClick={()=>setCount((prev)=>prev-1)}>decrrment</button>
        </div>
    );
};

export default Child;