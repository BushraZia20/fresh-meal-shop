import React from "react";
import "./ContactUs.css";
import hr from "../../Assets/Icons/hr.svg";
import phone2 from "../../Assets/Icons/phone-2.svg";
import email from "../../Assets/Icons/bag-2.svg";
import clock from "../../Assets/Icons/clock-2.svg";
import location2 from "../../Assets/Location2.png";

const ContactUs = () => {
  return (
    <div className="contact_us_div">
      <div className="left_contact_side">
        <div className="top_products_heading">
          <p>Contact Us</p>
          <img src={hr} alt="" />
        </div>
        <div className="contact_options">
          <div className="support_options">
            <img src={phone2} alt="" />
            <div className="support_details">
              <p className="p1">Call Us:</p>
              <p className="p2">(+84) 123 456 789</p>
            </div>
          </div>

          <div className="support_options">
            <img src={email} alt="" />
            <div className="support_details">
              <p className="p1">E-mail:</p>
              <p className="p2">support@freshmeal.com</p>
            </div>
          </div>

          <div className="support_options">
            <img src={clock} alt="" />
            <div className="support_details">
              <p className="p1">Working Hours</p>
              <p className="p2">Mon - Sat(8.00am - 12.00am)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right_contact_side">
        <img style={{ height: "100%", width: "100%" }} src={location2} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
