import React from "react";
import logo from "../assets/logo.svg";
export const NavBar = () => {
  return (
    <div className="nav-container">
      <div id="logo">
        <img src={logo} />
        <p>Social</p>
      </div>
      <div className="menu-container">
        <ul>
          <li>Feature</li>
          <li>Discover</li>
          <li>Stories</li>
          <li>Community</li>
          <li>Blog</li>
        </ul>
        <div className="button-container">
          <button className="login-btn">LOGIN</button>
          <button className="details-btn">SEE DETAIL</button>
          <div className="setting-icon">
            <span class="material-symbols-outlined">settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};
