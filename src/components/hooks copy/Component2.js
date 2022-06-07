import React from 'react';
import Componet3 from './Componet3';

const Component2 = ({info}) => {
    return (
        <div>
            {/* <h2>This is component 2</h2> */}
            <Componet3 info={info} />
        </div>
    );
};

export default Component2;