import React, { useState } from 'react';
import SingleDetails from '../../SingleDetails';

const UserDetails = () => {
    const [name,setName] =useState('Ehsan marketing')
    const [count,setCount] =useState(100)

    const likes ={
        id:1,
        likename:'fruits'
    }

    return (
        <div>
            <SingleDetails name={name} count={count} likes={likes}/>
        </div>
    );
};

export default UserDetails;