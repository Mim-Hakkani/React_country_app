import React from 'react';
import Component2 from './Component2';

const Component1 = ({info}) => {
    return (
        <div>
            {/* <h1>This is component 1</h1> */}
            <Component2 info={info}/>
        </div>
    );
};

export default Component1;