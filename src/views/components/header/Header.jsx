import React from "react";
import Logo from "../../../assets/images/Logo.png";
import "./header.scss";

function Header() {
  return (
    <div>
      <div className="Header">
        <div className="row">
          <div className="col-sm-2 header-left">
            <img src={Logo} alt="website_log"/>
          </div>
          <div className="col-sm-10 header-right">
            <ul>
              <li>Grades</li>
              <li>About us</li>
              <button className="login-signin">Login/Signup</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
