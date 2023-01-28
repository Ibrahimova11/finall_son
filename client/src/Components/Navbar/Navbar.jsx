
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__left">
          <h1>Nitro</h1>
        </div>
        <div className="navbar__right">
          <ul>
            <li>
              <Link className="link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Add"}>
                Add
              </Link>
            </li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Contact</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;