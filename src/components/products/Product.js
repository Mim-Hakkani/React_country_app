import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart, removeToCart } from '../../redux/actionCreator/productAction';
import { ADD_TO_CART } from '../../redux/actionTypes/actionTypes';


const Product = ({product}) => {

    // for description truncate 

    // const navigate = useNavigate()
    const location = useLocation()
    console.log('location :: ',location);
    // console.log('ami navigate :: ' , navigate);

  const maxLength = 60; // Maximum length for the description
  
  const dispatch =useDispatch()
 
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

             {
              location.pathname==='/products' && <button className="btn btn-primary" onClick={()=>dispatch(addToCart(product))}>Buy Now</button>
             }

               {
              location.pathname==='/cart' && <button className="btn btn-danger" onClick={()=>dispatch(removeToCart(product))}>Remove Cart</button>
             }
          
        </div>
      </div>

    );
};

export default Product;