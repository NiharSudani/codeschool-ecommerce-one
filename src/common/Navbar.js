import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <>
      
      

      <nav className="main-navbar d-flex align-items-center justify-content-between px-4 py-3 bg-white shadow-sm">
        {/* Logo */}
        <div className="navbar-logo fw-bold fs-4">Exclusive</div>

        
        <div className="navbar-links d-flex gap-4">
          <Link className="nav-link active" to="/">Home</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="search-box d-flex border rounded px-2 align-items-center">
            <input
              type="text"
              className="form-control border-0"
              placeholder="What are you looking for?"
              style={{ width: "200px" }}
            />
            <FaSearch className="text-muted" />
          </div>
          <FaHeart className="fs-5" />
          <FaShoppingCart className="fs-5" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
