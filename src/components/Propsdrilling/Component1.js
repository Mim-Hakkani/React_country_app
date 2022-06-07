import React, { useContext } from 'react';
import Component2 from './Component2';
import { personalInfo } from './ContextApi';

const Component1 = () => {
     
    return (
        <div>
            {/* <h1>This is component 1</h1> */}
            <Component2 />
        </div>
    );
};

export default Component1;