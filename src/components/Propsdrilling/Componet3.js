import React, { useContext } from 'react';
import Component4 from './Component4';
import { personalInfo } from './ContextApi';

const Componet3 = () => {
    const {info,cteatorName}=useContext(personalInfo)
    return (
        <div>
            <h2>{cteatorName}</h2>
            {/* <Component4  /> */}

        </div>
    );
};

export default Componet3;