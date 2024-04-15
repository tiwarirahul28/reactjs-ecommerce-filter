import React from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import "./Nav.css";
const Nav = ({ handleInputChange, query }) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter Your Search Shoes..."
            onChange={handleInputChange}
            value={query}
          />
        </div>
        <div className="profile-container">
          <a href="#">
            <CiHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUser className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
