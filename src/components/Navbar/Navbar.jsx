import { useState } from "react";
// import {Link } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div to="/" className="nav-logo">
            MishraTravels
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
               
                to="/"
                
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                to="/cars"
                
                className="nav-links"
                onClick={handleClick}
              >
                Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link
              
                to="/price"
               
                className="nav-links"
                onClick={handleClick}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;