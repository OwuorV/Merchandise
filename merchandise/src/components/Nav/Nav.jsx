import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <>
      <div className="navBar">
        <ul className="navHeader">
          <li>
            <a href="#">Main</a>
          </li>
          <li>
            <a href="#">Shipping</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
