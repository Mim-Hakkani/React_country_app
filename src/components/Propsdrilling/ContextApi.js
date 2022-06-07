import React, { createContext } from 'react';
import Component1 from './Component1';

//fake data is used for testing 
const info = 
    {
        name :'Ehsan Marketing',
        email:"ehsanworldinfo@gmail.com",
        contact:'01556622908'
    }
    const cteatorName = "Golam hakkani mim";

export const personalInfo = createContext();
const ContextApiMain = () => {

    return (
        <personalInfo.Provider value={{info,cteatorName}}>
            <Component1 />
        </personalInfo.Provider>
    );
};

export default ContextApiMain;