import React from 'react';

const Component4 = ({info}) => {
    return (
        <div>
            <h2>Name : {info.name}</h2>
            <h2>Email : {info.email}</h2>
            <h2>Constact : {info.contact}</h2>
        </div>
    );
};

export default Component4;