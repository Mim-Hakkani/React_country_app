import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
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
    const [user,setUser] =useState([]);

    //use asios instied of fetch 

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(data=>setUser(data))
    },[])

    return (
        <personalInfo.Provider value={{info,cteatorName,user}}>
            <Component1 />
        </personalInfo.Provider>
    );
};

export default ContextApiMain;