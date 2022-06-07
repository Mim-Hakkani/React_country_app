import React, { useContext } from 'react';
import { personalInfo } from './ContextApi';

const Component4 = () => {
    const {info,cteatorName} = useContext(personalInfo);
    console.log(info);
    return (
        <div>

            <h2>Name : {info.name}</h2>
            <h2>Email : {info.email}</h2>
            <h2>Constact : {info.contact}</h2>
            <span>{cteatorName}</span>
        </div>
    );
};

export default Component4;