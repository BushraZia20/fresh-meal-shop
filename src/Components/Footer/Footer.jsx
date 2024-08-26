import React from "react";
import "./Footer.css";
import fb from "../../Assets/Icons/facebook.svg";
import twitter from "../../Assets/Icons/twitter.svg";
import google from "../../Assets/Icons/google.svg";
import insta from "../../Assets/Icons/instagram.svg";
import foodtable from "../../Assets/food-table.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_about_us">
        <p className="p1">About Us</p>
        <div className="under_line" style={{ height: "2px" }}></div>
        <p className="p2">
          It was popularised in 1960 with the release of the latest sheets
          containing lorem psum message
        </p>
        <button>Read More</button>
      </div>

      <div className="footer_quick_links">
        <p className="p1">Quick links</p>
        <div className="under_line"></div>
        <p className="p2">Home</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Services</p>
        <p>Gallery</p>
        <p className="p3">Contact Us</p>
      </div>

      <div className="footer_follow_us">
        <p className="p1">Follow Us</p>
        <div className="under_line"></div>
        <div className="follow_options_div">
          <div className="follow_options">
            <img src={fb} alt="" />
            <p>Facebook</p>
          </div>
          <div className="follow_options">
            <img src={twitter} alt="" />
            <p>Twitter</p>
          </div>
          <div className="follow_options">
            <img src={google} alt="" />
            <p>Google+</p>
          </div>
          <div className="follow_options">
            <img src={insta} alt="" />
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="footer_insta_img_links">
        <p className="p1">Instagram</p>
        <div className="under_line"></div>
        <div className="insta_imgs">
          <div className="imgs">
            <img src={foodtable} alt="" />
          </div>
          <div className="imgs">
            <img src={foodtable} alt="" />
          </div>
          <div className="imgs">
            <img src={foodtable} alt="" />
          </div>
          <div className="imgs">
            <img src={foodtable} alt="" />
          </div>
          <div className="imgs">
            <img src={foodtable} alt="" />
          </div>
          <div className="imgs">
            <img src={foodtable} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
