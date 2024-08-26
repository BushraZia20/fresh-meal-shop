import React from "react";
import "./Header.css";
import Phone from "../../Assets/Icons/phone.svg";
import LOGO from "../../Assets/Icons/logo.svg";
import Clock from "../../Assets/Icons/clock.svg";

const Header = () => {
  return (
    <div className="header_main" style={{ width: "100%" }}>
      <div className="header_upper">
        <div className="contact_us">
          <img src={Phone} alt="phone us" />
          <div className="num_and_email">
            <p style={{ margin: 0, textAlign: "justify" }}>
              <strong>Call Us:(+84) 123 456 789</strong>
            </p>
            <p style={{ margin: 0 }}>E-mail: support@freshmeal.com</p>
          </div>
        </div>
        <div className="logo">
          <img src={LOGO} alt=".." />
        </div>
        <div className="working_hours">
          <img src={Clock} alt="clock" />
          <div className="working_hrs_text">
            <p style={{ margin: 0, textAlign: "justify" }}>
              <strong>Working Hours</strong>
            </p>
            <p style={{ margin: 0 }}>Mon - Sat (8.00am - 12.00am)</p>
          </div>
        </div>
      </div>
      <div className="header_lower">
        <div className="lower_header_options">
          <p style={{ marginTop: 0 }}>
            <strong>Home</strong>
          </p>

          <p style={{ marginTop: 0 }}>
            <strong>About Us</strong>
          </p>
          <p style={{ marginTop: 0 }}>
            <strong>Products</strong>
          </p>
          <p style={{ marginTop: 0 }}>
            <strong>Blog</strong>
          </p>
          <p style={{ marginTop: 0 }}>
            <strong>Shop</strong>
          </p>
          <p style={{ marginTop: 0 }}>
            <strong>Services</strong>
          </p>
          <p style={{ marginTop: 0 }}>
            <strong>Gallery</strong>
          </p>
          <p style={{ marginTop: 0 }}>
            <strong>Contact Us</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
