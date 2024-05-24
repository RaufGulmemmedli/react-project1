import React from "react";
import "./footer.css";
import Logo from "../../../assets/logoFooter.svg";
import Input from "../Input/input";

function footer() {
  return (
    <>
      <div className="footer">
        <div className="section1">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footerText">
            <h3>Want to recieve our awesome stories?</h3>
            <Input />
          </div>
          <p>© The 18 Design, All rights reserved.</p>
        </div>
        <div className="section2">
          <h3>Email</h3>
          <p>info@the18.design</p>
        </div>
        <div className="section3">
          <ul>
            <li>About us</li>
            <li>How it works</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className=" section3 section4">
          <ul>
            <li>Lead generation</li>
            <li>Customer engagement</li>
            <li>Customer support</li>
            <li>Help Center Articles</li>
            <li>Outbound Messages</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default footer;
