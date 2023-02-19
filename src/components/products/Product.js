import React from 'react';


const Product = ({product}) => {

    // for description truncate 

  const maxLength = 60; // Maximum length for the description
  
 
    return (

      <div className="card mb-4">
        <img src={product?.image} className="card-img-top" alt="Shoe 1" height="200" />
        <div className="card-body">
          
          <div className='d-flex justify-content-between'> 
          <h5 className="card-title fs-6">{product?.title}</h5>
          <p className="card-text">{product?.price}</p>
          
          </div>
          <p className="card-text">
             {   product?.description.length > maxLength
      ? product?.description.slice(0, maxLength) + "..." // Append ellipsis if the description is longer than the maximum length
      : product?.description}
             </p>
          <a href="# " className="btn btn-primary">Buy Now</a>
        </div>
      </div>

    );
};

export default Product;