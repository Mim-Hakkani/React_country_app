import React, { useState } from 'react';
import SingleDetails from '../../SingleDetails';

const UserDetails = () => {
    const [name,setName] =useState('Ehsan marketing')
    const [count,setCount] =useState(100)

    return (
        <div>
            <SingleDetails name={name} count={count} />
        </div>
    );
};

export default UserDetails;