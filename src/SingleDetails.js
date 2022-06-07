import React from 'react';
import propTypes from "prop-types";


const SingleDetails = (props) => {
    return (
        <div>
            <p>Company Name : {props.name}</p>
            <p>Ratting : {props.count}</p>
            <p>Likes : {props.likes.likename}</p>
        </div>
    );
};

SingleDetails.propTypes = {
name:propTypes.string,
// count:propTypes.string
count:propTypes.number,

// this is type checker for the oject data types 

likes:propTypes.shape({
    id:propTypes.number,
    likename:propTypes.string,

})


}

export default SingleDetails;