import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../products/Product';

const AddCart = () => {
    const cartProducts= useSelector((state)=>state)
    // console.log('cartProducts :: ',cartProducts);
    return (
        <div>
            <div className='row'> 
            {
                cartProducts.cart.map(product => <div className='col-md-3'> <Product product={product} />
                  </div> 
                  
                  )
                
            }
          </div>
        </div>
    );
};

export default AddCart;