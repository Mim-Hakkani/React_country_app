import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const cartlength = useSelector((state)=>state);
  // console.log('ami header cart :: ', cartlength.cart);

    return (
        <div className='mb-4'>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="# ">My Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          {/* <a className="nav-link" href="# ">Home</a> */}
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="# ">About</a> */}
          <Link to="products">productsall</Link>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="# ">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="# ">Wishlist</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="# ">Cart */}
          <Link to="/cart" className="nav-link">Cart

          { cartlength.cart.length && <span className="badge bg-danger">{cartlength.cart.length && cartlength.cart.length}</span>}</Link>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="# " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="# ">Men's Shoes</a></li>
            <li><a className="dropdown-item" href="# ">Women's Shoes</a></li>
            <li><a className="dropdown-item" href="# ">Men's Clothing</a></li>
            <li><a className="dropdown-item" href="# ">Women's Clothing</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </div>
    );
};

export default Header;