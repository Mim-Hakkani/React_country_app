import React, { useContext } from 'react';
import Component4 from './Component4';
import { personalInfo } from './ContextApi';

const Componet3 = () => {
    const {info,cteatorName,user}=useContext(personalInfo)
    // console.log(user);
    return (
        <div>
            <h2>{cteatorName}</h2>
            {/* <Component4  /> */}
             {
                 user?.data?.map(userinfo=><div key={userinfo?.id}>
                   <p>{userinfo?.website}</p>
                 </div>)
             }
        </div>
    );
};

export default Componet3;