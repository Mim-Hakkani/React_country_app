import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-dark text-light py-3">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        <p>&copy; 2023 My Website</p>
      </div>
      <div className="col-12 col-md-6">
        <nav className="nav justify-content-end">
          <a className="nav-link text-text-white" href="# ">Home</a>
          <a className="nav-link text-text-white" href="# ">About</a>
          <a className="nav-link text-text-white" href="# ">Contact</a>
        </nav>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;