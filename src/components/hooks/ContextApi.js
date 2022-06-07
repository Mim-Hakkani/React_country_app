import React from 'react';
import Component1 from './Component1';

const info = 
    {
        name :'Ehsan Marketing',
        email:"ehsanworldinfo@gmail.com",
        contact:'01556622908'
    }

const ContextApiMain = () => {
    return (
        <div>
            <Component1 info={info}/>
        </div>
    );
};

export default ContextApiMain;