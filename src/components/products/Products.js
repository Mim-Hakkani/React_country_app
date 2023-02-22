import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';


const Products = () => {
    const [productsAll, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // console.log('productsAll :: ', productsAll);

    const {cart} = useSelector((state)=>state)
    console.log("testItems :: ",cart);

    return (
        <div className="container">
            <div className="row">

                {
                    productsAll?.products?.map(product => <div className="col-md-3" key={product?.id} > <Product product={product} /> </div>)
                }
            </div>

        </div>
    );
};

export default Products;