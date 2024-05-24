import React from "react";
import "./header.css";
import Logo from "../../../assets/logo.svg";
function header() {
  return (
    <div className="nav">
      <div className="left1">
        <div className="icon">
          <img src={Logo} alt="" />
        </div>
        <div className="leftLink">
          <a href="#">About Us</a>
          <a href="#">How it work</a>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>
        </div>
      </div>
      <div className="right">
        <button className="login">Login</button>
        <button className="signUp">Sign Up</button>
      </div>
    </div>
  );
}

export default header;
