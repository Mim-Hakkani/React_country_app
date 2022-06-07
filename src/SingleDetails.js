import React from 'react';
import propTypes from "prop-types";


const SingleDetails = (props) => {
    return (
        <div>
            <p>Company Name : {props.name}</p>
            <p>Ratting : {props.count}</p>
        </div>
    );
};

SingleDetails.propTypes = {
name:propTypes.string,
count:propTypes.string
}

export default SingleDetails;